<template>
  <div class="meme-form-container">
    <input v-model="form.img.value" :placeholder="form.img.placeholder" @change="onChangeForm">
    <input v-model="form.above.value" :placeholder="form.above.placeholder" @change="onChangeForm">
    <input v-model="form.below.value" :placeholder="form.below.placeholder" @change="onChangeForm">
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
  },
  methods: {
    onChangeForm () {
      let data = {
        aboveText: this.form.above.value,
        belowText: this.form.below.value,
        imgSrc: this.form.img.value
      }
      this.$emit('memeCreatorFormChange', data)
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
