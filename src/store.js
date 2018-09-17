import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: ''
  },
  mutations: {
    setPlaylist (state, newList) {
      state.playlist = newList
    }
  },
  actions: {
    fetchPlaylist (context) {
      axios.get('http://127.0.0.1:8081/')
      .then(function (response) {
        context.commit('setPlaylist', response.data)
      })
      .catch(function (error) {
        console.log('Failed to request playlist:', error)
      });
      context.commit('setPlaylist', [])
    }
  }
})
