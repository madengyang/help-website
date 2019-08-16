import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user
  },
  getters
})

export default store
