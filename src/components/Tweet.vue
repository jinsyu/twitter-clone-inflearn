<template>
  <!-- tweets -->
  <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <router-link :to="`/profile/${tweet.uid}`">
      <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
    </router-link>
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{ tweet.email }}</span>
        <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
      </div>
      <!-- tweet body -->
      <router-link :to="`/tweet/${tweet.id}`">{{ tweet.tweet_body }}</router-link>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <!-- comment button -->
        <div @click="showCommentModal = true" class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
        </div>
        <!-- retweet button -->
        <div v-if="!tweet.isRetweeted" class="text-gray-500 hover:text-green-400" @click="handleRetweet(tweet)">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <div v-else class="text-green-400" @click="handleRetweet(tweet)">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <!-- like button -->
        <div v-if="!tweet.isLiked" class="text-gray-400 hover:text-red-400" @click="handleLikes(tweet)">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <div v-else class="text-red-400" @click="handleLikes(tweet)">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <!-- share button -->
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
        </div>
      </div>
    </div>
    <comment-modal :tweet="tweet" v-if="showCommentModal" @close-modal="showCommentModal = false"></comment-modal>
  </div>
</template>

<script>
import moment from 'moment'
import { ref } from 'vue'
import CommentModal from './CommentModal.vue'
import handleRetweet from '../utils/handleRetweet'
import handleLikes from '../utils/handleLikes'

export default {
  components: { CommentModal },
  props: ['currentUser', 'tweet'],
  setup() {
    const showCommentModal = ref(false)
    return {
      moment,
      showCommentModal,
      handleLikes,
      handleRetweet,
    }
  },
}
</script>

<style></style>
