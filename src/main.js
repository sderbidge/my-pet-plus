import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  avatarChosen: false,
  avatarImg: "",
  avatarName: "",
  maxHunger: 100,
  hunger: 100,
  maxThirst: 100,
  thirst: 100
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')