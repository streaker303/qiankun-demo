import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {registerMicroApps, start, initGlobalState} from 'qiankun'

Vue.config.productionTip = false

const initInfo = {
  user: {
    name: 'wj',
    age: 18
  }
}

const actions = initGlobalState(initInfo)
actions.onGlobalStateChange((state, pre) =>{
  console.log(state, 'main')
  store.commit('setCommonObj', state)
})
actions.setGlobalState({name: 'wj',age: '18'});
// actions.offGlobalStateChange();

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      data: {
        store
      }
    }
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react'
  }
]

registerMicroApps(apps);
start();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
