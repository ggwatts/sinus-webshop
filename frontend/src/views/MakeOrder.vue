<template>
  <div class="makeorder">
    <h1>Pay</h1>

    <div class="make-order-box">
      <div class="left-right-box">
        <h2>Your order</h2>
        <div class="order-list">
          <ul
            class="cart-list"
            v-for="product in products"
            :key="product.title"
          >
            <li class="cart-item">
              <img
                class="thumbnail"
                :src="require('@/assets/' + product.imgFile)"
              />

              <ul class="item-infos">
                <li class="title">{{ product.title }}</li>
                <li class="short">{{ product.shortDesc }}</li>
                <li class="numb">{{ product.serial }}</li>
              </ul>

              <h3 class="item-price">{{ product.price }}</h3>
            </li>
          </ul>
          <div class="line"></div>
          <div class="bottom-cart">
            <div class="total-price">
              <h4 class="total-price-text">TOTAL</h4>
              <h4 class="total-price-numb">{{ totalPrice }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="input-details">
        <div class="left-right-box">
          <h2>Your details</h2>
          <label>Name</label>
          <input type="text" />
          <label>Street</label>
          <input type="text" />
          <div class="two-input-box">
            <div>
              <label>Zip code</label>
              <input type="text" />
            </div>
            <div>
              <label>City</label>
              <input type="text" />
            </div>
          </div>
          <h2>Payment</h2>
          <label>Card Owner</label>
          <input type="text" />
          <label>Card number</label>
          <input type="text" />
          <div class="two-input-box">
            <div>
              <label>Valid until</label>
              <input type="text" />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" />
            </div>
          </div>
          <a class="reg-btn" @click="goToOrderDone">Submit Order</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
       numb: 0,
    };
    
  },
  computed:{
    products(){
      return this.$store.state.cartProducts
    },
    totalPrice(){
     this.products.forEach(product => {

       this.numb += product.price
     }
     );
      return this.numb;
    }
  },
   methods: {
    
goToOrderDone(){
    this.$router.push('/orderdone')
  },
   }
};
</script>

<style lang="scss" >
@import "@/assets/styles/styles.scss";
.cart-item{
  margin-top: 10px;
}
.make-order-box {
  display: flex;
}
.left-right-box {
  display: flex;
  flex-direction: column;
}
.order-list {
  background-color: white;
  min-width: 450px;
  height: 500px;
  
}
.input-details {
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 30px;

  h3 {
    font-family: Open sans;
    margin: 0px 0 0px 0;
  }
  label {
    color: rgba(0, 0, 0, 0.6);

    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
  }
}
input {
  padding: 6px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: transparent;
  min-width: 190px;
  
  margin-bottom: 15px;
}
h2 {
  margin: 15px 0 15px 0;
}
.reg-btn {
  background-color: black;

  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.two-input-box {
  display: flex;
  flex-direction: row;
}
</style>
