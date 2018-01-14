import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'

import { Row, Col, Icon, Card } from 'iview'
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Icon', Icon)
Vue.component('Card', Card)

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

// Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
