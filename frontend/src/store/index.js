import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/modules/users.js'
import books from '@/store/modules/books.js'

Vue.use(Vuex)


// https://vuex.vuejs.org/#what-is-a-state-management-pattern
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    books
  }
})
