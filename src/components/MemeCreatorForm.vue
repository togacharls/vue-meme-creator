<template>
  <div class="meme-form-container">
    <input :value="form.img.value" :placeholder="form.img.placeholder" @change="onChangeImg">
    <input :value="form.above.value" :placeholder="form.above.placeholder" @change="onChangeAbove">
    <input :value="form.below.value" :placeholder="form.below.placeholder" @change="onChangeBelow">
  </div>
</template>

<script>
import { store } from '@/store/store'
export default {
  name: 'MemeCreatorForm',
  store,
  data () {
    return {
      form: {
        above: {
          value: this.$store.getters.above,
          placeholder: 'Above text...'
        },
        below: {
          value: this.$store.getters.below,
          placeholder: 'Below text...'
        },
        img: {
          value: this.$store.getters.img,
          placeholder: 'Img src...'
        }
      }
    }
  },
  methods: {
    onChangeImg (e) {
      this.$store.dispatch('updateImg', e.target.value)
    },
    onChangeAbove (e) {
      this.$store.dispatch('updateAbove', e.target.value)
    },
    onChangeBelow (e) {
      this.$store.dispatch('updateBelow', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .meme-form-container{
    position: absolute;
  }
  input{
    display: block;
    margin: 0.6em 33%;
    width: 33%;
  }
</style>
