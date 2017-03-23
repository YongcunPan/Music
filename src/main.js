// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import {store}  from './store/store.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

 // eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  store,
  state:{
    playingList:[]
  },
  template: '<App/>',
  components: { App }
})
