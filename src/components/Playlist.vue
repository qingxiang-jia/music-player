<template>
  <div id='playlist'>
    <p>Playlist</p>
    <ul>
      <li v-for='song in songs'>
        <span v-bind:href='song.url' v-on:click='songSelected'>{{ song.filename }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "playlist",
  created: function() {
    this.$store.dispatch("fetchPlaylist");
  },
  methods: {
    songSelected: function (event) {
      this.$store.commit('setNowPlaying', {url: event.target.attributes.href.value, filename: event.target.innerHTML})
    }
  },
  computed: {
    songs() {
      return this.$store.state.playlist;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
