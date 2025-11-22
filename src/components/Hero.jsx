import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"/>
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)', backgroundSize:'24px 24px'}}/>
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-yellow-500/10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-white/5 rounded-full blur-3xl"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
              Trara — Premium Streetwear for the Bold
            </motion.h1>
            <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-5 text-lg text-zinc-300 max-w-prose">
              Trend-forward essentials crafted with quality fabrics. Minimal aesthetic, maximum presence. Designed for the youth, made for everyday.
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition">Shop New Arrivals</a>
              <a href="#about" className="px-5 py-3 rounded-md border border-white/20 text-white hover:border-white/40 transition">About Trara</a>
            </motion.div>
            <div className="mt-10 flex items-center gap-4 text-sm text-zinc-400">
              <div className="flex -space-x-2">
                {Array.from({length:5}).map((_,i)=> (
                  <img key={i} src={`https://i.pravatar.cc/60?img=${i+12}`} className="w-8 h-8 rounded-full ring-2 ring-black object-cover"/>
                ))}
              </div>
              <span>Trusted by 5k+ customers</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img src="https://images.unsplash.com/photo-1515165562835-c3b8c1b43c66?q=80&w=1600&auto=format&fit=crop" alt="Trara Look" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black/60 border border-white/10 backdrop-blur-md text-white px-4 py-3 rounded-xl">
              <p className="text-xs uppercase tracking-widest text-zinc-300">Featured</p>
              <p className="text-sm">Oversized Tee • Cream</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
