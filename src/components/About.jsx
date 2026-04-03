import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Diamond, Crown, Star } from 'lucide-react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '500+', label: 'Premium Clients' },
    { number: '50+', label: 'Exclusive Events' },
    { number: '100%', label: 'Satisfaction' },
  ]

  const values = [
    { icon: Diamond, title: 'Exclusivity', desc: 'Curated experiences reserved for the most discerning clientele.' },
    { icon: Crown, title: 'Prestige', desc: 'Setting the standard for luxury and sophistication in Central Africa.' },
    { icon: Star, title: 'Excellence', desc: 'Uncompromising quality in every detail, every moment, every experience.' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Who We Are</p>
          <h2 className="section-title">
            A Legacy of <span className="gold-text">Distinction</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about__description">
              Born in the heart of <strong>Libreville, Gabon</strong>, Black Luxury 242
              represents the pinnacle of refined living in Central Africa. We are more than
              a brand — we are a movement that celebrates African excellence, elegance,
              and the art of luxurious living.
            </p>
            <p className="about__description">
              Our mission is to curate extraordinary experiences, connect visionary
              individuals, and elevate the standard of luxury across the continent. From
              exclusive events to premium lifestyle consulting, we bring the world's finest
              to your doorstep.
            </p>
          </motion.div>

          <motion.div
            className="about__values"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {values.map((item, i) => (
              <div key={i} className="about__value-card">
                <item.icon className="about__value-icon" size={28} />
                <div>
                  <h3 className="about__value-title">{item.title}</h3>
                  <p className="about__value-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="about__stat">
              <span className="about__stat-number">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
