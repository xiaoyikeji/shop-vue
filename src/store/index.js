/**
 * Created by zc on 2018/8/19.
 */
import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from  './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,

})


