import { motion } from 'framer-motion'
import { Globe, MessageCircle, AtSign, ArrowUp } from 'lucide-react'
import './Footer.css'

const socialLinks = [
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Twitter / X', href: '#' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-text">BLACK</span>
              <span className="footer__logo-accent">LUXURY</span>
              <span className="footer__logo-code">242</span>
            </a>
            <p className="footer__tagline">
              Redefining luxury in Central Africa. Elegance, exclusivity,
              and sophistication for the distinguished.
            </p>
            <div className="footer__social">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="footer__social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4 className="footer__links-title">Stay Connected</h4>
            <p className="footer__newsletter-desc">
              Subscribe for exclusive updates and luxury insights.
            </p>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Black Luxury 242. All rights reserved.
          </p>
          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
