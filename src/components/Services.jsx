import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gem, PartyPopper, Shirt, GlassWater, Plane, Camera } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Gem,
    title: 'Luxury Consulting',
    description: 'Personalized lifestyle advisory for high-net-worth individuals seeking the finest experiences.',
  },
  {
    icon: PartyPopper,
    title: 'Exclusive Events',
    description: 'World-class soirées, galas, and private gatherings curated for the elite of Gabon and beyond.',
  },
  {
    icon: Shirt,
    title: 'Fashion & Style',
    description: 'Access to premium fashion houses, bespoke tailoring, and personal styling services.',
  },
  {
    icon: GlassWater,
    title: 'Fine Dining',
    description: 'Private chef experiences, wine collections, and exclusive dining reservations worldwide.',
  },
  {
    icon: Plane,
    title: 'Travel & Concierge',
    description: 'Luxury travel arrangements, private jets, yacht charters, and VIP experiences globally.',
  },
  {
    icon: Camera,
    title: 'Brand & Media',
    description: 'Premium content creation, luxury branding, and media production for distinguished clients.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="services__card-icon">
                <service.icon size={32} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
