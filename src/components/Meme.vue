<template>
  <div class="meme-container">
    <h1 class="above-text">{{aboveText}}</h1>
    <img :src="imgSrc"/>
    <h1 class="below-text">{{belowText}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Meme',
  data () {
    return {
      aboveText: 'Above Text',
      belowText: 'Below Text',
      imgSrc: 'https://www.pintzap.com/img/memes/list/11.jpg'
    }
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
  font-weight: normal;
  color: #ffffff;
  z-index: 2;
  width: 100%;
}
h1.above-text{}
h1.below-text{
  bottom: 0em;
}
</style>
