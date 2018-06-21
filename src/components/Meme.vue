<template>
  <div id="meme">
    <MemeImage/>
    <MemeCreatorForm/>
  </div>
</template>

<script>
import MemeImage from '@/components/MemeImage'
import MemeCreatorForm from '@/components/MemeCreatorForm'

export default {
  name: 'Meme',
  components: {
    MemeImage,
    MemeCreatorForm
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
