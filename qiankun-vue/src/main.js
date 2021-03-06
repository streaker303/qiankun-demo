import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {

}
export async function mount(props) {
  render(props)
  console.log('props-vue', props)
  let {store: commonStore} = props.data
  commonStore.commit('setCommonData', 44)

  props.setGlobalState({name: 'WJ', age: '19'})

}
export async function unmount(props) {
  instance.$destroy();
}
