import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Shop from './components/Shop'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Black Luxury 242 | Premium Luxury Lifestyle'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Shop />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
