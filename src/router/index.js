import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import('../views/Live.vue')
  },
  {
    path: '/news/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    props: true
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/success/AlbumPurchase.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  document.title = to.name + ' | ALDA'
  next()
})

export default router
