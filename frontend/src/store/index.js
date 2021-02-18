import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
  loggedIn: false,
  token: "",
  cartProducts: [],
  productList : [],
  totalPriceCart: 0,
  },
  mutations: {
  
    addToCart(state, newProduct){
      state.cartProducts.push(newProduct)
    },
    emptyCart(state) {
      state.cartProducts = []
    },
    getProducts(state, products){
      state.productList = products
    },
    login(state, user){
      state.currentUser = user
      state.loggedIn = true
      state.token = user.token
    },
  },
  actions: {
    async fetchProducts(context){
      await axios.get('http://localhost:5000/api/products/').then(
        (result) => context.commit('getProducts',result.data))
    },
    async fetchUser(context,user) {
      await axios.post('http://localhost:5000/api/auth/', {email: user.email, password: user.password}).then(
        (response) => context.commit('login', response.data))
    },
    async registerUser(_ , user){
      await axios.post('http://localhost:5000/api/register/', {
        email: user.email,   
        name: user.name, 
        password: user.password,
        repeatPassword: user.password,
        adress:{
          city: user.adress.city,
          street: user.adress.street,
          zip: user.adress.zip,
        }
      })
    },
  },
  modules: {
  },
  
  getters:{
  
   } 
  }
)
