import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-zinc-950 text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">About Trara</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Trara is a modern, youth-centric clothing brand blending premium materials with minimal, trend-forward designs. Our collections are crafted to be versatile and expressive — from oversized tees to signature hoodies and streetwear staples. We focus on comfort, quality, and silhouettes that elevate everyday style.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                {title:'Quality Fabric', desc:'Premium cotton blends and durable stitching'},
                {title:'Trendy Designs', desc:'Minimal yet bold, built for the youth'},
                {title:'Affordable Luxury', desc:'Premium feel without the premium markup'}
              ].map((f)=> (
                <div key={f.title} className="rounded-xl border border-white/10 bg-zinc-900/50 p-4">
                  <p className="text-sm text-yellow-400">{f.title}</p>
                  <p className="text-xs text-zinc-400 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
