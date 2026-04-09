import { loadStripe } from '@stripe/stripe-js'

// ============================================
// STRIPE CONFIGURATION
// Replace with your actual Stripe keys & price IDs
// ============================================

// Your Stripe publishable key (starts with pk_live_ or pk_test_)
// Get it from: https://dashboard.stripe.com/apikeys
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY_HERE'

// Your products — set these up in Stripe Dashboard:
// https://dashboard.stripe.com/products
// Each product needs a Price ID (starts with price_)
export const products = [
  {
    id: 'luxury-consulting',
    name: 'Luxury Consulting',
    description: 'One-on-one premium lifestyle advisory session with our expert consultants.',
    price: 500,
    currency: 'USD',
    priceId: 'price_YOUR_CONSULTING_PRICE_ID',
    features: ['2-hour session', 'Personalized plan', 'Follow-up support'],
  },
  {
    id: 'event-package',
    name: 'Event Package',
    description: 'Full-service exclusive event planning and execution for up to 50 guests.',
    price: 2500,
    currency: 'USD',
    priceId: 'price_YOUR_EVENT_PRICE_ID',
    popular: true,
    features: ['Venue sourcing', 'Catering & decor', 'VIP coordination'],
  },
  {
    id: 'vip-membership',
    name: 'VIP Membership',
    description: 'Annual membership with priority access to all Black Luxury 242 services.',
    price: 5000,
    currency: 'USD',
    priceId: 'price_YOUR_VIP_PRICE_ID',
    features: ['All services included', 'Priority booking', 'Exclusive events access'],
  },
]

let stripePromise = null

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export async function redirectToCheckout(priceId) {
  const stripe = await getStripe()

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}${window.location.pathname}?payment=success`,
    cancelUrl: `${window.location.origin}${window.location.pathname}?payment=cancelled`,
  })

  if (error) {
    console.error('Stripe checkout error:', error.message)
    alert('Payment could not be initiated. Please try again.')
  }
}
