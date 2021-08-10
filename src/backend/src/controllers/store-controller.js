import Stripe from 'stripe'
const stripe = new Stripe('pk_test_51JLS1dG8aJhMUW3TYwrcF6cWZiJ9IwVFr7ntaVEqXOgNpjLj6Ki7oDsDMX5EJBHdul0p6K3xLyEBwascaJV2Hivg00Fmt1EoMa');

/**
 * Class that controls user routes and actions.
 */
export class StoreController {
  // Post new user.
  async album (req, res, next) {
    try {
      const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:8080/',
        cancel_url:  'http://localhost:8080/contact',
        payment_method_types: ['card'],
        shipping_address_collection: [],
        shipping_rates: [],
        line_items: [
          {price: 'price_1JN1lJG8aJhMUW3TwaxRWtht', quantity: 2},
        ],
        mode: 'payment',
      })
    } catch (error) {
      next(error)
    }
  }
}
