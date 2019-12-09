import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
//导入所需组件
import {
  Button,
  Icon,
  Field,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Search,
  Toast
} from 'vant'

import 'lib-flexible/flexible'

Vue.use(VueAxios, axios)

Vue
  .use(Button)
  .use(Icon)
  .use(Field)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
