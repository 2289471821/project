import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShareshow: false,
    isProductshow: false,
    cartList: []
  },
  mutations: {
    changeShareshow(state) {
      state.isShareshow = !state.isShareshow
    },
    changeProductshow(state) {
      state.isProductshow = !state.isProductshow
    },
    addCart(state, payload) {
      let oldProduct = null;
      for(let item of state.cartList){
        if((item.genre === payload.genre) && (item.id === payload.id)){
          oldProduct = item;
        }
      }
      if(oldProduct){
        oldProduct.count += 1;
      }else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  },
  actions: {

  },
  modules: {
    
  }
})

export default store
