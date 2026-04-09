import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingBag, Check, Loader2 } from 'lucide-react'
import { products, redirectToCheckout } from '../stripe'
import './Shop.css'

export default function Shop() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [loadingId, setLoadingId] = useState(null)

  const handlePurchase = async (product) => {
    setLoadingId(product.id)
    await redirectToCheckout(product.priceId)
    setLoadingId(null)
  }

  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="shop" className="shop" ref={ref}>
      <div className="shop__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Invest in Luxury</p>
          <h2 className="section-title">
            Our <span className="gold-text">Packages</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="shop__grid">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className={`shop__card ${product.popular ? 'shop__card--popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {product.popular && (
                <div className="shop__card-badge">Most Popular</div>
              )}

              <h3 className="shop__card-name">{product.name}</h3>
              <p className="shop__card-desc">{product.description}</p>

              <div className="shop__card-price">
                <span className="shop__card-amount">
                  {formatPrice(product.price, product.currency)}
                </span>
              </div>

              <ul className="shop__card-features">
                {product.features.map((feature, j) => (
                  <li key={j}>
                    <Check size={16} className="shop__card-check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`shop__card-btn ${product.popular ? 'shop__card-btn--primary' : ''}`}
                onClick={() => handlePurchase(product)}
                disabled={loadingId === product.id}
              >
                {loadingId === product.id ? (
                  <Loader2 size={18} className="shop__spinner" />
                ) : (
                  <ShoppingBag size={18} />
                )}
                <span>
                  {loadingId === product.id ? 'Redirecting...' : 'Purchase Now'}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="shop__note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Secure payments powered by Stripe. All transactions are encrypted.
        </motion.p>
      </div>
    </section>
  )
}
