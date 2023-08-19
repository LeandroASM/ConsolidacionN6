import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Opinion from '@/views/Comentar.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'
import User from '@/views/PerfilUsuario.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/opinion/:gameName',
    name: 'opinion',
    component: Opinion
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/:userName',
    name: 'user',
    component: User
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
