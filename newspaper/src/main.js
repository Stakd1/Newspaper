import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  Toast,
  List,
  Divider,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  NavBar
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
  .use(List)
  .use(Divider)
  .use(Cell)
  .use(CellGroup)
  .use(Grid)
  .use(GridItem)
  .use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
