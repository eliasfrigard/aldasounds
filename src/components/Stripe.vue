<template>
  <div class="stripe">
    <div class="ui container album-form">
      <form action="" method="post">
        <select class="cd-select" name="destination" id="">
          <option value="">Shipping Destination</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
        </select>
        <select class="cd-select" name="quantity" v-model="albumQuantity">
          <option value="">Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </form>
    </div>
    <div id="buy-header" class="header" @click="submitVanilla">
      <h3>Buy for 19,99€ + shipping!</h3>
    </div>
    <p class="destination-info">If your destination is not on the list, contact us and we can make an arrangement for you!</p>
    
    <div>
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        :shippingRates="shipping_rates"
        :shippingAddressCollection="shipping_address_collection"
        @loading="v => loading = v"
      />
      <button @click="submit">Pay now!</button>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51JLS1dG8aJhMUW3TYwrcF6cWZiJ9IwVFr7ntaVEqXOgNpjLj6Ki7oDsDMX5EJBHdul0p6K3xLyEBwascaJV2Hivg00Fmt1EoMa'
)

export default {
  name: "Stripe",
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = 'pk_test_51JLS1dG8aJhMUW3TYwrcF6cWZiJ9IwVFr7ntaVEqXOgNpjLj6Ki7oDsDMX5EJBHdul0p6K3xLyEBwascaJV2Hivg00Fmt1EoMa';
    
    return {
      albumQuantity: 0,
      loading: false,
      lineItems: [
        {
          price: 'price_1JN1lJG8aJhMUW3TwaxRWtht', // The id of the one-time price you created in your Stripe dashboard
          quantity: 2,
        },
      ],
      shipping_address_collection: {
        allowedCountries: [
          'SE',
          'FI'
        ]
      },
      shipping_rates: ['shr_1JN2BSG8aJhMUW3TRkVKKytG'],
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/live',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    async submitVanilla() {
      const stripe = await stripePromise

      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1JN1lJG8aJhMUW3TwaxRWtht', // The id of the one-time price you created in your Stripe dashboard
            quantity: 2,
          },
          {
            price: 'price_1JN3CGG8aJhMUW3T3rAKDUQO',
            quantity: 1
          }
        ],
        mode: 'payment',
        successUrl: 'http://localhost:8080/',
        cancelUrl: 'http://localhost:8080/live',
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

</style>