<template>
  <div class="meme-container">
    <h1 class="above-text">{{above}}</h1>
    <img :src="img"/>
    <h1 class="below-text">{{below}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MemeImage',
  props: {
    img: String,
    above: String,
    below: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meme-container{
  position: relative;
  text-align: center;
}
img{
  width: 100%;
}
h1{
  position: absolute;
  font-weight: bold;
  color: #ffffff;
  z-index: 2;
  width: 100%;
  font-size: 3em;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
}
h1.below-text{
  bottom: 0em;
}
</style>
