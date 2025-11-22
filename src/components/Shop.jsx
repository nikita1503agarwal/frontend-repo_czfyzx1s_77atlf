import React, { useState } from 'react'

const products = [
  {id:1, name:'Oversized Tee — Cream', price:799, img:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop', tag:'New'},
  {id:2, name:'Signature Hoodie — Black', price:1499, img:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop', tag:'Best'},
  {id:3, name:'Street Cargo — Olive', price:1699, img:'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=1200&auto=format&fit=crop'},
  {id:4, name:'Overshirt — Beige', price:1299, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'},
  {id:5, name:'Relaxed Jeans — Indigo', price:1599, img:'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop'},
  {id:6, name:'Boxy Tee — White', price:699, img:'https://images.unsplash.com/photo-1533867617858-e7b97cc211b1?q=80&w=1200&auto=format&fit=crop'}
]

const Shop = ({ onAdd }) => {
  const [items] = useState(products)
  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Shop</h2>
          <p className="text-sm text-zinc-400">Premium quality • Fast shipping</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"/>
                {p.tag && <span className="absolute top-3 left-3 text-xs bg-yellow-500 text-black px-2 py-1 rounded-md">{p.tag}</span>}
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-yellow-400 font-semibold">₹{p.price}</p>
                  <button onClick={()=>onAdd(p)} className="px-3 py-2 rounded-md border border-white/15 text-white hover:bg-white hover:text-black transition text-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
