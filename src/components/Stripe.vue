<template>
  <div class="stripe">
    <div class="titles">
      <h1 class="subtitle" v-if="shippingPrice === '' || quantity === ''">Buy now for <h2 class="line-price">19,99€</h2> + shipping!</h1>
      <h1 class="subtitle" v-else>Buy now for <h2 class="line-price">{{(shippingPrice.price + (19.99 * quantity)).toFixed(2)}}€</h2> including shipping!</h1>
    </div>
    <div class="ui container album-form">
      <form action="" method="post">
        <select class="cd-select" name="destination" v-model="destination" @change="updatePrice">
          <option value="">Shipping Destination</option>
          <option value="fi">Finland</option>
          <option value="eu">Europe</option>
          <option value="na">North America</option>
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

const stripePromise = loadStripe(
  'pk_test_51JLS1dG8aJhMUW3TYwrcF6cWZiJ9IwVFr7ntaVEqXOgNpjLj6Ki7oDsDMX5EJBHdul0p6K3xLyEBwascaJV2Hivg00Fmt1EoMa'
)

export default {
  name: "Stripe",
  data () {
    this.publishableKey = 'pk_test_51JLS1dG8aJhMUW3TYwrcF6cWZiJ9IwVFr7ntaVEqXOgNpjLj6Ki7oDsDMX5EJBHdul0p6K3xLyEBwascaJV2Hivg00Fmt1EoMa';
    
    return {
      quantity: '',
      destination: '',
      shippingPrice: '',
      shippingPriceQuantity: 1,
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/live',
      suomiEuropeShipping: {
        id: 'price_1JNGHNG8aJhMUW3T7iR8KEp6',
        price: 3.70
      },
      europeShipping: {
        id: 'price_1JNGIwG8aJhMUW3TP8LXMuDa',
        price: 5.55
      },
      worldShippingSingle: {
        id: 'price_1JNGKlG8aJhMUW3TnllEEqHl',
        price: 4.20
      },
      worldShippingMultiple: {
        id: 'price_1JNGMDG8aJhMUW3Ta9wS6UQ7',
        price: 7.40
      },
      shipping_address_collection: {
        allowedCountries: [
          'SE',
          'FI'
        ]
      },
    };
  },
  methods: {
    updatePrice() {
      if (this.destination === '' || this.quantity === '') return

      // Convert quantity to int, needs to be string in form.
      const albumQuantity = parseInt(this.quantity)

      if (this.destination === 'fi') { // Suomi shipping
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
        } else if (albumQuantity === 5) {
          // Implement five.
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
        } else if (albumQuantity === 5) {
          // Implement five.
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

      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            // Album Price.
            price: 'price_1JN1lJG8aJhMUW3TwaxRWtht',
            quantity: parseInt(this.quantity),
          },
          {
            // Shipping Price.
            price: this.shippingPrice.id,
            quantity: this.shippingPriceQuantity
          }
        ],
        mode: 'payment',
        successUrl: 'http://localhost:8080/live',
        cancelUrl: 'http://localhost:8080/',
        shippingAddressCollection: {
          allowedCountries: [
            'SE',
            'FI'
          ]
        },
      })

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
.subtitle , .line-price{
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