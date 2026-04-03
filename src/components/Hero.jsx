import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-overlay" />

      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="hero__particle"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-20, -100],
              x: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="hero__badge-line" />
          <span className="hero__badge-text">Est. Libreville, Gabon</span>
          <span className="hero__badge-line" />
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Redefining
          <span className="hero__title-accent"> Luxury</span>
          <br />
          in Central Africa
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Where elegance meets exclusivity. A curated experience of premium
          lifestyle, fashion, and sophistication for the distinguished.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#services" className="btn-primary">
            <span>Discover More</span>
          </a>
          <a href="#contact" className="btn-outline">
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
