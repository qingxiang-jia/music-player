<template>
  <div id='playlist'>
    <p>Playlist</p>
    <div>Selected song: {{ nowPlaying }}</div>
    <select size='20' v-model='nowPlaying'>
      <option v-for='song in songs' v-bind:value='song'>
        {{ song.filename }}
      </option>
    </select>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "playlist",
  created: function() {
    this.$store.dispatch("fetchPlaylist");
  },
  computed: {
    songs() {
      return this.$store.state.playlist;
    },
    nowPlaying: {
      get: function () {
        return this.$store.state.nowPlaying
      },
      set: function (newVal) {
        this.$store.commit('setNowPlaying', newVal)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
