import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import store from '../store'

const routes = [
  { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', name: 'explore', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/notifications', name: 'notifications', component: Notifications, title: '알림', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/messages', name: 'messages', component: Messages, title: '쪽지', icon: 'far fa-envelope fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', name: 'bookmarks', component: Home, title: '북마크', icon: 'far fa-bookmark fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', name: 'list', component: Home, title: '리스트', icon: 'far fa-list-alt fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/profile', name: 'profile', component: Profile, title: '프로필', icon: 'far fa-user fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/', name: 'more', component: Home, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
  { path: '/register', name: 'register', component: Register, meta: { isMenu: false, layout: 'EmptyLayout' } },
  { path: '/login', name: 'login', component: Login, meta: { isMenu: false, layout: 'EmptyLayout' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// navigation guard
router.beforeEach((to, from, next) => {
  const currentUser = store.state.user
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)
  // not authenticated
  if (requireAuth && !currentUser) next('/login')
  // authenticated
  else next()
})

export default router
