<template>
  <div class="meme-form-container">
    <input v-model="form.img.value" :placeholder="form.img.placeholder">
    <input v-model="form.above.value" :placeholder="form.above.placeholder">
    <input v-model="form.below.value" :placeholder="form.below.placeholder">
  </div>
</template>

<script>
export default {
  name: 'MemeCreatorForm',
  data () {
    return {
      form: {
        above: {
          value: '',
          placeholder: 'Above text...'
        },
        below: {
          value: '',
          placeholder: 'Below text...'
        },
        img: {
          value: '',
          placeholder: 'Img src...'
        }
      }
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
    margin-bottom: 0.2em;
  }
</style>
