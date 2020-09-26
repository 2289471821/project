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
        payload.checked = true;
        state.cartList.push(payload);
      }
    },
    add(state, index) {
      state.cartList[index].count++
    },
    sub(state, index) {
      if(state.cartList[index].count <= 1) {
        state.cartList[index].count = 1
      }else {
        state.cartList[index].count--
      }
    },
    remove(state, index) {
      state.cartList.splice(index, 1);
    },
    checked(state, index) {
      state.cartList[index].checked = !state.cartList[index].checked;
    }
  },
  actions: {

  },
  modules: {
    
  }
})

export default store
