<template>
  <div id='app'>
    <player></player>
  </div>
</template>

<script>
import player from './components/Player.vue'

export default {
  name: "app",
  components: {
    player
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
