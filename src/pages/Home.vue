<template>
  <!-- main part -->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100">
        <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
        <div class="ml-2 flex-1 flex flex-col">
          <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
          <div class="text-right">
            <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
            <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
          </div>
        </div>
      </div>
      <!-- tweets -->
      <Tweet :currentUser="currentUser" :tweet="tweet" v-for="tweet in tweets" :key="tweet.id" />
    </div>
  </div>
  <!-- trend part -->
  <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
import { ref, computed, onBeforeMount } from 'vue'
import store from '../store'
import { TWEET_COLEECTION } from '../firebase'
export default {
  components: { Trends, Tweet },
  setup() {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    const tweets = ref([])

    onBeforeMount(() => {
      TWEET_COLEECTION.orderBy('created_at', 'desc').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            tweets.value.splice(change.newIndex, 0, change.doc.data())
          } else if (change.type === 'modified') {
            tweets.value.splice(change.oldIndex, 1, change.doc.data())
          } else if (change.type === 'removed') {
            tweets.value.splice(change.oldIndex, 1)
          }
        })
      })
    })

    const onAddTweet = async () => {
      try {
        const doc = TWEET_COLEECTION.doc()
        await doc.set({
          id: doc.id,
          tweet_body: tweetBody.value,
          uid: currentUser.value.uid,
          created_at: Date.now(),
          num_comments: 0,
          num_retweets: 0,
          num_likes: 0,
        })
        tweetBody.value = ''
      } catch (e) {
        console.log('on add tweet error on homepage:', e)
      }
    }

    return { currentUser, tweetBody, onAddTweet, tweets }
  },
}
</script>

<style></style>
