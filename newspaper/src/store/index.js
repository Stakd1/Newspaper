import Vue from 'vue'
import Vuex from 'vuex'

import {
  indexModule
} from './indexStore/indexModule'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    indexModule
  }
})
