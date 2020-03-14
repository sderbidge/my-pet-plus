import Vue from 'vue'
import VueRouter from 'vue-router'
import Choose from '../views/Choose.vue'
import myPet from '../views/myPet.vue'
import Play from '../views/Play.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Choose',
    component: Choose
  },
  {
    path: '/myPet',
    name: 'myPet',
    component: myPet
  },
  {
    path: '/Play',
    name: 'Play',
    component: Play
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router