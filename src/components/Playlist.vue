<template>
  <div id='playlist'>
    <p>Playlist</p>
    <!-- <ul>
      <li v-for='song in songs'>
        <span v-bind:href='song.url' v-on:click='songSelected'>{{ song.filename }}</span>
      </li>
    </ul> -->
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
  data: function() {
    return {
      selectedSong: null
    };
  },
  methods: {
    songSelected: function(event) {
      this.$store.commit("setNowPlaying", {
        url: event.target.attributes.href.value,
        filename: event.target.innerHTML
      });
    }
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
