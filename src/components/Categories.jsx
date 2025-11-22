import React from 'react'

const categories = [
  {name:'Men', img:'https://images.unsplash.com/photo-1592878904946-b3cd9f132ec0?q=80&w=1200&auto=format&fit=crop'},
  {name:'Women', img:'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'},
  {name:'Oversized T-shirts', img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop'},
  {name:'Hoodies', img:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'},
  {name:'Streetwear', img:'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop'}
]

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Shop by Category</h2>
          <a href="#shop" className="text-sm text-yellow-400 hover:text-yellow-300">Explore All</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map(cat => (
            <a key={cat.name} href="#shop" className="group relative rounded-2xl overflow-hidden border border-white/10">
              <img src={cat.img} alt={cat.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
              <p className="absolute bottom-3 left-3 text-white font-medium">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
