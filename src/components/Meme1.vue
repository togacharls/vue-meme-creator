<template>
  <div class="meme">
    <MemeImage/>
    <MemeCreatorForm/>
  </div>
</template>

<script>
import MemeImage from '@/components/MemeImage'
import MemeCreatorForm from '@/components/MemeCreatorForm'

export default {
  name: 'Meme1',
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
  width: 80%;
}
</style>
