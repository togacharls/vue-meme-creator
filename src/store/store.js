import 'es6-promise/auto'
import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)

// Due to vuex behavoir, all imported references will be lost if we can to use them in our store
const Axios = axios
function ModuleObject () {
  return {
    state: {
      notFoundImg: 'http://thetechtemple.com/wp-content/themes/TechNews/images/img_not_available.jpg',
      img: '',
      above: '',
      below: ''
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
          () => context.commit('updateImg', img),
          () => context.commit('updateImg', context.state.notFoundImg)
        )
      },
      updateAbove (context, above) {
        context.commit('updateAbove', above)
      },
      updateBelow (context, below) {
        context.commit('updateBelow', below)
      }
    }
  }
}
const meme1 = new ModuleObject()
const meme2 = new ModuleObject()
meme1.state.above = 'Hello World!'
meme1.state.below = 'I use Module 1'
meme1.state.img = 'https://s3.amazonaws.com/coursetro/posts/144-full.png'
export const store = new Vuex.Store({
  modules: {
    meme1: meme1,
    meme2: meme2
  }
})
meme2.state.img = 'https://ypereirareis.github.io/images/posts/vuejs.jpg'
meme2.state.above = 'Hello APP'
meme2.state.below = 'I use Module 2'
store.registerModule('meme2', meme2)
