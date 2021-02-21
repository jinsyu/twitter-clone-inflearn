<template>
  <div class="flex-1 flex">
    <div class="flex-1 border-r border-gray-100">
      <div class="flex flex-col" v-if="tweet">
        <!-- title -->
        <div class="flex items-center px-3 py-2 border-b border-gray-100">
          <button @click="router.go(-1)">
            <i class="fas fa-arrow-left text-primary text-lg ml-3 hover:bg-blue-50 p-2 rounded-full h-10 w-10"></i>
          </button>
          <span class="font-bold text-lg ml-6">트윗</span>
        </div>
        <!-- tweet -->
        <div class="px-3 py-2 flex">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" />
          <div class="ml-2">
            <div class="font-bold">{{ tweet.email }}</div>
            <div class="text-gray text-sm">@{{ tweet.username }}</div>
          </div>
        </div>
        <div class="px-3 py-2">{{ tweet.tweet_body }}</div>
        <div class="px-3 py-2 text-gray text-xs">{{ moment(tweet.created_at).fromNow() }}</div>
        <div class="h-px w-full bg-gray-100"></div>
        <div class="flex space-x-2 px-3 py-2 items-center">
          <span class="">{{ tweet.num_retweets }}</span>
          <span class="text-sm text-gray">리트윗</span>
          <span class="ml-5">{{ tweet.num_likes }}</span>
          <span class="text-sm text-gray">마음에 들어요</span>
        </div>
        <div class="h-px w-full bg-gray-100"></div>
        <!-- buttons -->
        <div class="flex justify-around py-2">
          <button>
            <i class="far fa-comment text-gray-400 text-xl hover:bg-blue-50 hover:text-primary p-2 rounded-full h-10 w-10"></i>
          </button>
          <button>
            <i class="fas fa-retweet text-gray-400 text-xl hover:bg-green-50 hover:text-green-400 p-2 rounded-full h-10 w-10"></i>
          </button>
          <button>
            <i class="far fa-heart text-gray-400 text-xl hover:bg-red-50 hover:text-red-400 p-2 rounded-full h-10 w-10"></i>
          </button>
        </div>
        <div class="h-px w-full bg-gray-100"></div>
        <!-- comments -->
        <div v-for="comment in 10" :key="comment" class="flex hover:bg-gray-100 cursor-pointer px-3 py-3 border-b border-gray-100">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer" />
          <div class="ml-2 flex-1">
            <div class="flex items-center space-x-2">
              <span class="font-bold">jinsyu@nate.com</span>
              <span class="text-gray text-sm">@jinsyu</span>
              <span>19 days ago</span>
            </div>
            <div>댓글</div>
          </div>
          <button>
            <i class="fas fa-trash text-red-400 hover:bg-red-50 w-10 h-10 rounded-full p-2"></i>
          </button>
        </div>
      </div>
    </div>
    <trends></trends>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import router from '../router'
import { onBeforeMount, ref, computed } from 'vue'
import store from '../store'
import { TWEET_COLEECTION } from '../firebase'
import { useRoute } from 'vue-router'
import getTweetInfo from '../utils/getTweetInfo'
import moment from 'moment'

export default {
  components: { Trends },
  setup() {
    const tweet = ref(null)
    const comments = ref([])
    const currenUser = computed(() => store.state.user)

    const route = useRoute()

    onBeforeMount(async () => {
      await TWEET_COLEECTION.doc(route.params.id).onSnapshot(async (doc) => {
        const t = await getTweetInfo(doc.data(), currenUser.value)
        tweet.value = t
      })
    })
    return { router, tweet, comments, currenUser, moment }
  },
}
</script>

<style></style>
