import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './Gallery.css'

const galleryItems = [
  { id: 1, category: 'Events', title: 'Gala Night', subtitle: 'Annual Black Luxury Gala', color: '#1a1510' },
  { id: 2, category: 'Fashion', title: 'Couture Collection', subtitle: 'Premium fashion showcase', color: '#141418' },
  { id: 3, category: 'Lifestyle', title: 'The Fine Life', subtitle: 'Luxury living redefined', color: '#18140e' },
  { id: 4, category: 'Events', title: 'VIP Lounge', subtitle: 'Exclusive networking soirée', color: '#111416' },
  { id: 5, category: 'Travel', title: 'Private Escapes', subtitle: 'Bespoke travel experiences', color: '#161210' },
  { id: 6, category: 'Dining', title: 'Chef\'s Table', subtitle: 'World-class gastronomy', color: '#141016' },
]

const categories = ['All', 'Events', 'Fashion', 'Lifestyle', 'Travel', 'Dining']

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">
            Our <span className="gold-text">Gallery</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="gallery__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div className="gallery__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(item)}
                style={{ backgroundColor: item.color }}
              >
                <div className="gallery__item-overlay">
                  <span className="gallery__item-category">{item.category}</span>
                  <h3 className="gallery__item-title">{item.title}</h3>
                  <p className="gallery__item-subtitle">{item.subtitle}</p>
                </div>
                <div className="gallery__item-shine" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="gallery__lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: selected.color }}
            >
              <button className="gallery__lightbox-close" onClick={() => setSelected(null)}>
                <X size={24} />
              </button>
              <div className="gallery__lightbox-info">
                <span className="gallery__item-category">{selected.category}</span>
                <h3>{selected.title}</h3>
                <p>{selected.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
