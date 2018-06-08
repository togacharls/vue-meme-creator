<template>
  <div id="app">
    <Meme :img="memeConf.img" :above="memeConf.above" :below="memeConf.below"/>
    <MemeCreatorForm @memeCreatorFormChange="onMemeCreatorFormChange"/>
  </div>
</template>

<script>
import Meme from './components/Meme'
import MemeCreatorForm from './components/MemeCreatorForm'

export default {
  name: 'App',
  components: {
    Meme,
    MemeCreatorForm
  },
  data () {
    return {
      memeConf: {
        img: '',
        above: '',
        below: ''
      }
    }
  },
  methods: {
    onMemeCreatorFormChange (data) {
      this.memeConf.img = data.imgSrc
      this.memeConf.above = data.aboveText
      this.memeConf.below = data.belowText
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
  left: 25%;
  width: 50%;
}
</style>
