import 'es6-promise/auto'
import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)

// Due to vuex behavoir, all imported references will be lost if we can to use them in our store
const Axios = axios

export const store = new Vuex.Store({
  state: {
    defaultImg: 'https://s3.amazonaws.com/coursetro/posts/144-full.png',
    notFoundImg: 'http://thetechtemple.com/wp-content/themes/TechNews/images/img_not_available.jpg',
    defaultAbove: 'MEME CREATOR',
    defaultBelow: 'USING VUE AND VUEX',
    img: '',
    above: '',
    below: ''
  },
  getters: {
    img (state) {
      return state.img.length ? state.img : state.defaultImg
    },
    above (state) {
      return state.above.length ? state.above : state.defaultAbove
    },
    below (state) {
      return state.below.length ? state.below : state.defaultBelow
    }
  },
  mutations: {
    updateImg (state, img) {
      state.img = img
    },
    updateAbove (state, above) {
      state.above = above
    },
    updateBelow (state, below) {
      state.below = below
    }
  },
  actions: {
    updateImg (context, img) {
      Axios.get(img).then(
        () => { context.commit('updateImg', img) },
        () => { context.commit('updateImg', context.state.defaultImg) })
    },
    updateAbove (context, above) {
      context.commit('updateAbove', above)
    },
    updateBelow (context, below) {
      context.commit('updateBelow', below)
    }
  }
})
