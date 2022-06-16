import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=> import('@/views/home')
const Login=()=> import('@/views/Login')
const Download=()=> import('@/views/download')
const Follow=()=> import('@/views/follow')
const Musician=()=> import('@/views/musician')
const Mymusic=()=> import('@/views/mymusic')
const Shoppingmall=()=> import('@/views/shoppingmall')
// import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect:'/home'
  },
  {
  	path:'/home',
  	component:Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/download',
    component:Download
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/musician',
    component:Musician
  },
  {
    path:'/mymusic',
    component:Mymusic
  },
  {
    path:'/shoppingmall',
    component:Shoppingmall
  }
]





// const routerPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
