<template>
  <div id="app">
    <Meme/>
    <Meme/>
  </div>
</template>

<script>
import Meme from '@/components/Meme'
export default {
  name: 'App',
  components: {
    Meme
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
.meme{
  display: inline-block;
  width: 45%;
}
</style>
