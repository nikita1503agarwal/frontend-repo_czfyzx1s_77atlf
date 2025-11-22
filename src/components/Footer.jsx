import React from 'react'
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-white text-2xl font-semibold">Trara</p>
            <p className="mt-3 text-sm">Premium, minimal, youth-first clothing brand. Crafted for comfort and style.</p>
          </div>
          <div>
            <p className="text-white font-medium">Shop</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#categories">Men</a></li>
              <li><a href="#categories">Women</a></li>
              <li><a href="#categories">Oversized T-shirts</a></li>
              <li><a href="#categories">Hoodies</a></li>
              <li><a href="#categories">Streetwear</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about">About</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#shop">Shop</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium">Follow</p>
            <div className="mt-3 flex items-center gap-3">
              <a className="p-2 rounded-md border border-white/10 hover:border-white/20" href="https://instagram.com" target="_blank"><Instagram size={18}/></a>
              <a className="p-2 rounded-md border border-white/10 hover:border-white/20" href="https://twitter.com" target="_blank"><Twitter size={18}/></a>
              <a className="p-2 rounded-md border border-white/10 hover:border-white/20" href="https://facebook.com" target="_blank"><Facebook size={18}/></a>
              <a className="p-2 rounded-md border border-white/10 hover:border-white/20" href="mailto:hello@trara.co" target="_blank"><Mail size={18}/></a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-xs flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Trara. All rights reserved.</p>
          <p>Designed with love • Minimal & Premium</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
