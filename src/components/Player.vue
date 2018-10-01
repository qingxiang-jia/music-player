<template>
  <div id='player'>
    <div>Now playing: {{nowPlaying.filename}}</div>
    <button v-on:click='prevClicked'>Prev</button>
    <button v-on:click='playClicked' v-bind:disabled='playing'>Play</button>
    <button v-on:click='pauseClicked' v-bind:disabled='!playing'>Pause</button>
    <button v-on:click='stopClicked' v-bind:disabled='!playing'>Stop</button>
    <button v-on:click='nextClicked'>Next</button>
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
  data: function() {
    return {
      playing: false
    };
  },
  methods: {
    playClicked: function(event) {
      this.music.play()
      this.playing = true
    },
    pauseClicked: function(event) {
      this.music.pause()
      this.playing = false
    },
    stopClicked: function(event) {
      this.music.stop()
      this.playing = false
    },
    prevClicked: function(event) {
      let currentIndex = this.nowPlaying.index
      let nextIndex = currentIndex - 1
      if (nextIndex >= 0) {
        this.music.stop()
        this.$store.commit("setNowPlaying", this.playlist[nextIndex]);
      }
    },
    nextClicked: function(event) {
      let currentIndex = this.nowPlaying.index
      let nextIndex = currentIndex + 1
      if (nextIndex < this.playlist.length) {
        this.music.stop()
        this.$store.commit("setNowPlaying", this.playlist[nextIndex]);
      }
    }
  },
  computed: {
    ...mapGetters(['nowPlaying', 'playlist'])
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
