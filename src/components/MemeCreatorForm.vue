<template>
  <div class="meme-form-container">
    <input v-model="imgSrc" :placeholder="placeholders.img" @change="onChangeImg">
    <input v-model="aboveText" :placeholder="placeholders.above" @change="onChangeAbove">
    <input v-model="belowText" :placeholder="placeholders.below" @change="onChangeBelow">
  </div>
</template>

<script>
export default {
  name: 'MemeCreatorForm',
  props: {
    img: {
      type: String
    },
    above: {
      type: String
    },
    below: {
      type: String
    }
  },
  data () {
    return {
      imgSrc: this.img,
      aboveText: this.above,
      belowText: this.below,
      placeholders: {
        img: 'Img src...',
        above: 'Above text...',
        below: 'Below text...'
      }
    }
  },
  methods: {
    onChangeImg (e) {
      this.$emit('change-img', e.target.value)
    },
    onChangeAbove (e) {
      this.$emit('change-above', e.target.value)
    },
    onChangeBelow (e) {
      this.$emit('change-below', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    display: block;
    margin: 0.6em 10%;
    width: 80%;
  }
</style>
