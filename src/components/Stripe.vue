<template>
  <div class="stripe">
    <div class="titles">
      <h1 class="subtitle" v-if="shippingPrice.id === 'none'">Buy now for <h2 class="line-price">{{computedPrice}}€</h2> + <h1 class="line-through">shipping!</h1></h1>
      <h1 class="subtitle" v-else-if="shippingPrice === '' || quantity === ''">Buy now for <h2 class="line-price">19.99€</h2> + shipping!</h1>
      <h1 class="subtitle" v-else>Buy now for <h2 class="line-price">{{computedPrice}}€</h2> including shipping!</h1>
    </div>
    <div class="ui container album-form">
      <div v-if="destination === 'none'">
        <p class="destination-info">You have selected no shipping. You must recieve the album directly from the musicians!</p>
        <br>
      </div>
      <form action="" method="post">
        <select class="cd-select" name="destination" v-model="destination" @change="updatePrice">
          <option value="">Shipping Destination</option>
          <option value="fi">Finland</option>
          <option value="eu">Europe</option>
          <option value="na">North America</option>
          <option value="none">No Shipping</option>
        </select>
        <select class="cd-select" name="quantity" v-model="quantity" @change="updatePrice">
          <option value="">Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </form>
    <div id="buy-header" class="header-disabled" v-if="shippingPrice === '' || quantity === ''">
      <h3>Continue to payment!</h3>
    </div>
    <div id="buy-header" class="header" @click="submitVanilla" v-else>
      <h3>Continue to payment!</h3>
    </div>
    </div>
    <p class="destination-info">For large orders or destinations not on the list, contact us and we can make an arrangement for you!</p>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.VUE_APP_STRIPE_KEY)

export default {
  name: "Stripe",
  data () {    
    return {
      quantity: '',
      destination: '',
      shippingPrice: '',
      shippingPriceQuantity: 0,
      successURL: 'https://aldasounds.com/',
      cancelURL: 'http://aldasounds.com/#/success',
      albumPrice: {
        id: 'price_1JO0beDjXF4YVvjQe6FfUmyX',
        price: 19.99
      },
      suomiEuropeShipping: {
        id: 'price_1JO0aiDjXF4YVvjQ5FVWwC9L',
        price: 2.70
      },
      europeShipping: {
        id: 'price_1JO0asDjXF4YVvjQVDZWNhAq',
        price: 4.55
      },
      worldShippingSingle: {
        id: 'price_1JO0axDjXF4YVvjQHepgU9NM',
        price: 3.20
      },
      worldShippingMultiple: {
        id: 'price_1JO0b6DjXF4YVvjQpM7kLv1C',
        price: 6.40
      },
      shipping_address_collection: {
        allowedCountries: ["AT","BE","BG","HR","CY","CZ","DK","EE","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","GB","FI","SE","NO","IS","LI","CH","ME","MK","AL","RS","TR","BA","XK","AM","AZ","MD","RU","GE","UA","BY","US","CA"]
      },
    }
  },
  computed: {
    computedPrice() {
      const price = (this.shippingPrice.price * this.shippingPriceQuantity) + (this.albumPrice.price * this.quantity)

      return price.toFixed(2)
    }
  },
  methods: {
    updatePrice() {
      if (this.destination === '' || this.quantity === '') return

      // Convert quantity to int, needs to be string in form.
      const albumQuantity = parseInt(this.quantity)

      if (this.destination === 'none') {
        this.shippingPrice = { id: 'none', price: 0.00 }
        this.shippingPriceQuantity = 0
      }
      else if (this.destination === 'fi') { // Suomi shipping
        this.shippingPrice = this.suomiEuropeShipping
        if (albumQuantity <= 4) {
          this.shippingPriceQuantity = 1  
        } else if (albumQuantity > 4) {
          this.shippingPriceQuantity = 2
        }
      } else if (this.destination === 'eu') { // Europe Shipping
        if (albumQuantity === 1) {
          this.shippingPrice = this.suomiEuropeShipping
          this.shippingPriceQuantity = 1
        } else if (albumQuantity >= 2 && albumQuantity <= 4) {
          this.shippingPrice = this.europeShipping
          this.shippingPriceQuantity = 1
        } else {
          this.shippingPrice = this.europeShipping
          this.shippingPriceQuantity = 2
        }
      } else if (this.destination === 'na') { // World Shipping
        if (albumQuantity === 1) {
          this.shippingPrice = this.worldShippingSingle
          this.shippingPriceQuantity = 1
        } else if (albumQuantity >= 2 && albumQuantity <= 4) {
          this.shippingPrice = this.worldShippingMultiple
          this.shippingPriceQuantity = 1
        } else {
          this.shippingPrice = this.worldShippingMultiple
          this.shippingPriceQuantity = 2
        }
      }
    },
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    async submitVanilla() {
      const stripe = await stripePromise
      
      const config = {
        lineItems: [
          {
            // Album Price.
            price: this.albumPrice.id,
            quantity: parseInt(this.quantity),
          }
        ],
        mode: 'payment',
        successUrl: this.successURL,
        cancelUrl: this.cancelURL,
      }

      // Add shipping information if applicable.
      if (this.shippingPrice.id !== 'none') {
        config.lineItems.push({
            // Shipping Price.
            price: this.shippingPrice.id,
            quantity: this.shippingPriceQuantity
        })

        config.shippingAddressCollection = {
          allowedCountries: [
            'SE',
            'FI'
          ]
        }
      }

      const { error } = await stripe.redirectToCheckout({ ...config })

      if (error) {
        console.log(error)
      }
    }
  },
}
</script>

<style scoped>
#buy-header {
  background-color: #ec3c01;
  margin: 30px 0 40px 0;
}

.line-through {
  text-decoration: line-through;
  display:inline
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 45px 0;
}
.title {
  font-size: 70px;
  letter-spacing: 5px;
}
.subtitle , .line-price, .line-through {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 40px;
  text-align: center;
  line-height: 200%;
}
.line-price {
  font-family: myriad-pro, sans-serif;
  display:inline;
  color: #ec3c01;
}
.pre-title {
  letter-spacing: 2px;
}

.title, .subtitle, .pre-title {
  line-height: 125%;
}

.album-form form {
  display:flex;
  justify-content: center;
  align-items: center;
}

select {
  width: 500px;
  height: 50px;
  margin: 15px;
  border: none;
  border-bottom: 2px solid #042e42;
  font-family: myriad-pro, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}

select:focus {
  outline: none;
  border-bottom: 4px solid #ec3c01;
}

.destination-info {
  text-align: center;
  letter-spacing: 0.5px;
}

#buy-header h3 {
  text-transform: capitalize;
}

@media screen and (max-width: 768px) {
  select {
    width: 100%;
    margin:15px 0;
  }

  .album-form form {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .album-form {
    justify-content: center;
    align-items: center;
  }
  
  .album-form form {
    width: 100%;
    margin: 0;
  }
}
</style>