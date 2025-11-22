import React from 'react'

const Testimonials = () => {
  const data = [
    {name:'Aarav', text:'Premium feel and perfect fit. Trara has become my go-to for everyday streetwear.'},
    {name:'Meera', text:'The oversized tees are top quality. Minimal design that elevates every outfit!'},
    {name:'Kabir', text:'Affordable yet premium. Love the hoodies — super comfy and stylish.'}
  ]
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">What customers say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((t)=> (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/80?u=${t.name}`} className="w-10 h-10 rounded-full"/>
                <p className="font-medium">{t.name}</p>
              </div>
              <p className="mt-4 text-zinc-300">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
