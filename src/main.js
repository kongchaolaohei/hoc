import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import IMFComponents from './components/IMFCustomComponents'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(IMFComponents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
