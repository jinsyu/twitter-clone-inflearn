<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" @click="$emit('close-modal')">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="border-b border-gray-100 p-2 flex items-center justify-between">
          <div class="flex items-center">
            <button @click="$emit('close-modal')" class="flex items-center justify-center fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"></button>
            <span class="font-bold text-lg">프로필 수정</span>
          </div>
          <div class="text-right mr-2">
            <button class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">저장</button>
          </div>
        </div>
        <!-- tweeting section -->
        <div class="h-60">
          <!-- background image -->
          <div class="bg-gray-300 h-40 relative flex-none flex items-center justify-center">
            <img ref="backgroundImage" src="/background.png" class="object-cover absolute h-full w-full" />
            <button @click="onChangeBackgroundImage" class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
            <input @change="previewBackgroundImage" type="file" accept="image/*" id="backgroundImageInput" class="hidden" />

            <!-- profile image -->
            <img ref="profileImage" src="/profile.jpeg" class="border-4 border-white w-28 h-28 absolute -bottom-14 left-2 rounded-full" />
            <button @click="onChangeProfileImage" class="absolute -bottom-5 left-11 h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
            <input @change="previewProfileImage" type="file" accept="image/*" id="profileImageInput" class="hidden" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import addTweet from '../utils/addTweet'
import store from '../store'
export default {
  setup(props, { emit }) {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)

    const profileImage = ref(null)
    const backgroundImage = ref(null)

    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
        emit('close-modal')
      } catch (e) {
        console.log('on add tweet error on homepage:', e)
      }
    }

    const onChangeBackgroundImage = () => {
      document.getElementById('backgroundImageInput').click()
    }

    const onChangeProfileImage = () => {
      document.getElementById('profileImageInput').click()
    }

    const previewBackgroundImage = (event) => {
      const file = event.target.files[0]
      let reader = new FileReader()
      reader.onload = function (event) {
        backgroundImage.value.src = event.target.result
      }
      reader.readAsDataURL(file)
    }

    const previewProfileImage = (event) => {
      const file = event.target.files[0]
      let reader = new FileReader()
      reader.onload = function (event) {
        profileImage.value.src = event.target.result
      }
      reader.readAsDataURL(file)
    }

    return {
      tweetBody,
      onAddTweet,
      currentUser,
      onChangeBackgroundImage,
      onChangeProfileImage,
      previewBackgroundImage,
      previewProfileImage,
      profileImage,
      backgroundImage,
    }
  },
}
</script>

<style></style>
