<template>
  <div id='player'>
    <button v-on:click='playClicked'>Play</button>
    <button v-on:click='pauseClicked'>Pause</button>
    <button v-on:click='stopClicked'>Stop</button>
  </div>
</template>

<script>
export default {
  name: 'player',
  methods: {
    playClicked: function (event) {
      console.log('play clicked!')
    },
    pauseClicked: function (event) {
      console.log('pause clicked!')
    },
    stopClicked: function (event) {
      console.log('stop clicked!')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
