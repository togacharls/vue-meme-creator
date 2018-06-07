<template>
  <div id="app">
    <Meme/>
    <MemeCreatorForm/>
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
