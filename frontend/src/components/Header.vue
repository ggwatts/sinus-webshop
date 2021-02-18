<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <a href="#"><img src="@/assets/sinus-logo.svg" /> </a>
      </div>
      <div class="menu">
        <ul>
        <a @click="goToProducts" >  <li class="nav-item">Products</li></a> 
          <a @click="goToRegister" > <li class="nav-item">Register</li></a> 
          <!-- Register/MyAccount -->
          <li class="nav-item" >
           <div @click="openLogin()">Login</div> 
 
            <div>
              <transition name="fade" appear>
                <Login class="login" v-if="showLogin" />
              </transition>
            </div>
          </li>
          <li class="nav-cart">
            <transition name="fade" appear>
              <div class="cart-counter" v-if="cartProducts.length > 0">
                {{ cartProducts.length }}
              </div>
            </transition>
            <a @click="openCart()">
              <img class="cart-icon" src="@/assets/cart-icon.png" />
            </a>
            <transition name="fade" appear>
              <Cart class="cart" v-if="showModal" />
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Cart from "@/components/Cart";
import Login from "@/components/Login";
export default {
  components: { Cart, Login },
  data() {
    return {
      showModal: false,
      showLogin: true,

      products: [],
      counter: 0,
    };
  },
  methods: {
    
goToRegister(){
    this.$router.push('/register')
  },
  goToProducts(){
    this.$router.push('/products')
  },
    openCart() {
      this.showModal = !this.showModal;
       this.showLogin = false;
    },
     openLogin() {
      this.showLogin = !this.showLogin;
       this.showModal = false;
    },
    cartCounter() {},
  },
  computed: {
    cartProducts() {
      return this.$store.state.cartProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.header {
  min-width: 880px;
  position: relative;
}
.cart-counter {
  background-color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 15px;
  position: absolute;
  text-align: center;
  margin-left: 25px;
  line-height: 14px;
  font-family: Open sans;
  font-weight: bold;
  padding-bottom: -10px;
  vertical-align: middle;
}
.header .navbar {
  width: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.logo img {
  max-width: 250px;
  min-width: 200px;
}
.menu ul {
  display: flex;
  align-items: center;
}
.menu .nav-item {
  list-style-type: none;
  padding: 0 25px;
  cursor: pointer;
  font-size: 19px;
  font-family: Open sans;
}
.nav-cart{
  padding: 0 0 0 25px;
}
.cart-icon {
  width: 44px;
  margin-top: 7px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}
.cart {
  margin-left: -130px;
  z-index: 3;
}
.login{
  margin-top:13px ;
  margin-left: -130px;
   z-index: 3;
}
</style>
