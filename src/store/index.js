import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShareshow: false,
    isProductshow: false,
    isServiceShow: false,
    cartList: [],
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    username: null,
    profilephoto: null
  },
  mutations: {
    changeShareshow(state) {
      state.isShareshow = !state.isShareshow
    },
    changeProductshow(state) {
      state.isProductshow = !state.isProductshow
    },
    changeServiceshow(state) {
      state.isServiceShow = !state.isServiceShow
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
    },

    setUsername(state, username) {
      state.username = username;
    },
    setProfilephoto(state, profilephoto) {
      state.profilephoto = profilephoto;
    },
    setToken(state, token) {
      state.token = token;
      sessionStorage.token = token;
    },
    delToken (state) {
			state.token = '';
			sessionStorage.removeItem("token");
		}
  },
  actions: {

  },
  modules: {
    
  }
})

export default store
