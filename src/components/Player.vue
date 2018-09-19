<template>
  <div id='player'>
    <div>Now playing: {{nowPlaying.filename}}</div>
    <button v-on:click='playClicked' v-bind:disabled='playing'>Play</button>
    <button v-on:click='pauseClicked' v-bind:disabled='!playing'>Pause</button>
    <button v-on:click='stopClicked' v-bind:disabled='!playing'>Stop</button>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
import { mapGetters } from "vuex";

export default {
  name: "player",
  created: function() {
    this.music = new Howl({
      src: ["test-sound.mp3"]
    });
  },
  data: function () {
    return {
      playing: false
    }
  },
  methods: {
    playClicked: function(event) {
      this.music.play();
      this.playing = true;
    },
    pauseClicked: function(event) {
      this.music.pause();
      this.playing = false;
    },
    stopClicked: function(event) {
      this.music.stop();
      this.playing = false;
    }
  },
  computed: {
    ...mapGetters(["nowPlaying"])
  },
  watch: {
    nowPlaying: function(newVal) {
      this.music.stop();
      this.music = new Howl({
        src: [newVal.url]
      });
      this.music.play();
      this.playing = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
