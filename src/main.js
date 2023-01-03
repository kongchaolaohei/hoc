import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import IEFComponents from './components/IEFCustomComponents'

Vue.config.productionTip = false

Vue.use(IEFComponents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
