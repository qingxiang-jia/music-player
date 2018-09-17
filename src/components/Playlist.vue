<template>
  <div id='playlist'>
    <p>Playlist</p>
    <ul>
      <li v-for='song in songs'>
        <a v-bind:href="song.url">{{ song.filename }}</a>
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
  methods: {},
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
