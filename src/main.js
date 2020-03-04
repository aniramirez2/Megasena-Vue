import Vue from 'vue'
import App from './App.vue'
import Numero from './components/Number.vue'
import Lottery from './components/Lottery.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    'Numero': Numero,
    'Lottery': Lottery,
  }
}).$mount('#app')
