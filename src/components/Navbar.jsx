import React from 'react'
import { Menu, ShoppingBag, Instagram, Twitter, Facebook } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ onCartOpen }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20">
              <Menu size={20} />
            </button>
            <Link to="/" className="text-2xl font-semibold tracking-wider text-white">
              <span className="px-2 py-1 rounded-md bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 text-black">Trara</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <NavLink to="/" className={({isActive})=>`text-white/80 hover:text-white transition ${isActive? 'text-white': ''}`}>Home</NavLink>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#categories" className="text-white/80 hover:text-white transition">Categories</a>
            <a href="#shop" className="text-white/80 hover:text-white transition">Shop</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition">Reviews</a>
            <NavLink to="/contact" className={({isActive})=>`text-white/80 hover:text-white transition ${isActive? 'text-white': ''}`}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" className="hidden sm:inline-flex p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20"><Instagram size={18}/></a>
            <a href="https://twitter.com" target="_blank" className="hidden sm:inline-flex p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20"><Twitter size={18}/></a>
            <a href="https://facebook.com" target="_blank" className="hidden sm:inline-flex p-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20"><Facebook size={18}/></a>
            <button onClick={onCartOpen} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium shadow-lg shadow-yellow-500/20 hover:from-yellow-400 hover:to-yellow-500">
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
