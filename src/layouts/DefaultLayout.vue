<template>
  <div class="flex h-screen container mx-auto relative">
    <!-- side section -->
    <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center xl:items-start">
        <!-- twitter logo -->
        <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
        <!-- sidemenu icons -->
        <div class="flex flex-col items-start space-y-1">
          <router-link :to="route.path" :class="`hover:text-primary hover:bg-blue-50 p-2 xl:px-4 xl:py-2 rounded-full cursor-pointer ${router.currentRoute.value.name == route.name ? 'text-primary' : ''}`" v-for="route in routes" :key="route">
            <div v-if="route.meta.isMenu">
              <i :class="route.icon"></i>
              <span class="ml-5 text-xl hidden xl:inline-block">{{ route.title }}</span>
            </div>
          </router-link>
        </div>
        <!-- tweet button -->
        <div class="w-full xl:pr-3 flex justify-center">
          <button @click="showTweetModal = true" class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark">
            <span class="hidden xl:block">트윗</span>
            <i class="fas fa-plus xl:hidden"></i>
          </button>
        </div>
      </div>
      <!-- profile button -->
      <div class="xl:pr-3 mb-3 relative" @click="showProfileDropdown = true">
        <button class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" />
          <div class="xl:ml-2 hidden xl:block">
            <div class="text-sm font-bold">{{ currentUser.email }}</div>
            <div class="text-xs text-gray-500 text-left">@{{ currentUser.username }}</div>
          </div>
          <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"></i>
        </button>
        <div class="xl:hidden flex justify-center">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </div>
    <!-- main section -->
    <div class="flex-1 flex h-screen">
      <router-view />
    </div>
    <!-- profile dropdown menu -->
    <div class="absolute bottom-20 left-12 shadow rounded-lg w-60 bg-white" v-if="showProfileDropdown" @click="showProfileDropdown = false">
      <button class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center">
        <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full" />
        <div class="ml-2">
          <div class="font-bold text-sm">{{ currentUser.email }}</div>
          <div class="text-left text-gray-500 text-sm">@{{ currentUser.username }}</div>
        </div>
        <i class="fas fa-check text-primary ml-auto"></i>
      </button>
      <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">@{{ currentUser.username }} 계정에서 로그아웃</button>
    </div>

    <!-- tweet modal popup -->
    <tweet-modal v-if="showTweetModal" @close-modal="showTweetModal = false"></tweet-modal>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import router from '../router'
import { auth } from '../firebase'
import store from '../store'
import TweetModal from '../components/TweetModal.vue'

export default {
  components: { TweetModal },
  setup() {
    const routes = ref([])
    const showProfileDropdown = ref(false)
    const showTweetModal = ref(false)

    const currentUser = computed(() => store.state.user)

    const onLogout = async () => {
      await auth.signOut()
      store.commit('SET_USER', null)
      await router.replace('/login')
    }

    onBeforeMount(() => {
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    })

    return { routes, showProfileDropdown, onLogout, currentUser, router, showTweetModal }
  },
}
</script>
