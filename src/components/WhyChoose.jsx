import React from 'react'

const WhyChoose = () => {
  const points = [
    {title:'Quality Fabric', desc:'Premium cotton blends, breathable and durable.'},
    {title:'Trendy Designs', desc:'Clean, minimal, and youth-centric silhouettes.'},
    {title:'Affordable Prices', desc:'Premium look without the luxury price tag.'},
    {title:'Made for Everyday', desc:'Comfort-first fits for daily wear.'}
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Why choose Trara?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(p => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <p className="text-yellow-400 font-medium">{p.title}</p>
              <p className="text-zinc-300 mt-2 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
