<template>
  <div id="app">
    <Meme1/>
    <Meme2/>
  </div>
</template>

<script>
import Meme1 from '@/components/Meme1'
import Meme2 from '@/components/Meme2'
export default {
  name: 'App',
  components: {
    Meme1,
    Meme2
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
