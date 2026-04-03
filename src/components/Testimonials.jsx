import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Jean-Pierre Ndong',
    role: 'CEO, Ndong Enterprises',
    text: 'Black Luxury 242 transformed our corporate events into unforgettable experiences. Their attention to detail and understanding of luxury is unparalleled in Gabon.',
  },
  {
    name: 'Marie-Claire Obiang',
    role: 'Fashion Designer',
    text: 'Working with Black Luxury 242 elevated my brand to new heights. Their network and expertise in the luxury sector opened doors I never thought possible.',
  },
  {
    name: 'Patrick Essono',
    role: 'Diplomat & Entrepreneur',
    text: 'From private travel arrangements to exclusive dining, Black Luxury 242 consistently delivers beyond expectations. They define premium service in Central Africa.',
  },
  {
    name: 'Isabelle Mba',
    role: 'Art Collector',
    text: 'The team at Black Luxury 242 understands the true meaning of luxury. Every interaction feels personal, curated, and extraordinarily refined.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="testimonials__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="testimonials__slider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Quote className="testimonials__quote-icon" size={48} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonials__card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <p className="testimonials__text">{testimonials[current].text}</p>
              <div className="testimonials__author">
                <div className="testimonials__author-avatar">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonials__author-name">{testimonials[current].name}</h4>
                  <p className="testimonials__author-role">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button className="testimonials__arrow" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__arrow" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
