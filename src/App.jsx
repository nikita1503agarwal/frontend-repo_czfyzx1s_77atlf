import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Shop from './components/Shop'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { Routes, Route } from 'react-router-dom'
import ContactPage from './components/ContactPage'

function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const handleAdd = (item) => {
    setCartItems((prev)=> [...prev, item])
    setCartOpen(true)
  }
  return (
    <div className="min-h-screen bg-black">
      <Navbar onCartOpen={()=>setCartOpen(true)} />
      <Hero />
      <About />
      <Categories />
      <Shop onAdd={handleAdd} />
      <WhyChoose />
      <Testimonials />
      <Footer />
      <CartDrawer open={cartOpen} items={cartItems} onClose={()=>setCartOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
