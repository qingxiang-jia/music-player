<template>
  <div id='player'>
    <div>Now playing: {{nowPlaying.filename}}</div>
    <button v-on:click='playClicked'>Play</button>
    <button v-on:click='pauseClicked'>Pause</button>
    <button v-on:click='stopClicked'>Stop</button>
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
  methods: {
    playClicked: function(event) {
      this.music.play();
    },
    pauseClicked: function(event) {
      this.music.pause();
    },
    stopClicked: function(event) {
      this.music.stop();
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
