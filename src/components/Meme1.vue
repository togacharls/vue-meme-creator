<template>
  <div class="meme">
    <MemeImage :img="img" :above="above" :below="below"/>
    <MemeCreatorForm :img="img" :above="above" :below="below" @change-img="onChangeImg" @change-above="onChangeAbove" @change-below="onChangeBelow"/>
  </div>
</template>

<script>
import MemeImage from '@/components/MemeImage'
import MemeCreatorForm from '@/components/MemeCreatorForm'
import {store} from '@/store/store'
export default {
  name: 'Meme1',
  store,
  components: {
    MemeImage,
    MemeCreatorForm
  },
  computed: {
    img () {
      return this.$store.state.meme1.img
    },
    above () {
      return this.$store.state.meme1.above
    },
    below () {
      return this.$store.state.meme1.below
    }
  },
  methods: {
    onChangeImg (e) {
      this.$store.state.meme1.img = e
    },
    onChangeAbove (e) {
      this.$store.state.meme1.above = e
    },
    onChangeBelow (e) {
      this.$store.state.meme1.below = e
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.meme-container{
  top: 12.5%;
}
.meme-container,
.meme-form-container{
  width: 80%;
}
</style>
