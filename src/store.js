import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import XmlReader from 'xml-reader';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: [],
    nowPlaying: {}
  },
  mutations: {
    setPlaylist (state, newList) {
      state.playlist = newList
    },
    setNowPlaying (state, newSong) {
      state.nowPlaying = newSong
    }
  },
  actions: {
    fetchPlaylist (context) {
      axios.get('http://127.0.0.1:8081/')
      .then(function (response) {
        let reader = XmlReader.create()
        let newList = []
        reader.on('done', data => {
          for (let element of data.children) {
            newList.push({url: 'http://localhost:8081/' + element.attributes.href, filename: element.children[0].value})
          }
        })
        reader.parse(response.data)
        context.commit('setPlaylist', newList)
      })
      .catch(function (error) {
        console.log('Failed to request playlist:', error)
      });
      context.commit('setPlaylist', [])
    }
  }
})
