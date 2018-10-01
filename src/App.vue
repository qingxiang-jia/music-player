<template>
  <div id='app'>
    <player></player>
    <playlist></playlist>
  </div>
</template>

<script>
import player from "./components/Player.vue";
import playlist from "./components/Playlist.vue";

export default {
  name: "app",
  components: {
    player,
    playlist
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
