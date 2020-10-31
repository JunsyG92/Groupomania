import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    currentUser: [],
    posts: [],
    post: [],
    postsUser: [],
    user: []
  },
  mutations: {
    CONNECT_USER(state, payload) {
        state.connected = true;
        state.user = payload
    },
    GET_USER_DATA(state, payload) {
        state.connected = true;
        state.user = payload
    },
    DISCONNECT_USER(state) {
        state.connected = false
        state.user = null
    },
    GET_ALL_POST(state, payload) {
        state.posts = payload
    },
    GET_ALL_POST_OF_CURRENT_USER(state, payload) {
        state.postsUser = payload
    },
    GET_ONE_POST(state, payload) {
        state.post = payload
    },
    CREATE_POST(state, payload) {
        state.posts = {
            ...state.posts += payload
        }
    }
  },
  getters: {

  },
  actions: {
    //   sessionUser(token) {
    //       if (token) {
    //           commit('CONNECT_USER')
    //       } else {
    //         commit('DISCONNECT_USER')
    //       }
    //   }

  },
  modules: {
      
  }
})
