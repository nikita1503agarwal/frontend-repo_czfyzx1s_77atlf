import React from 'react'
import { Phone, Mail, Send, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Contact Trara</h1>
        <p className="mt-2 text-zinc-400">We usually reply within 24 hours.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-white/10 p-6 bg-zinc-900/40">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-zinc-300">Name</label>
                <input required className="mt-1 w-full px-3 py-2 rounded-md bg-black border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Your name"/>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Email</label>
                <input required type="email" className="mt-1 w-full px-3 py-2 rounded-md bg-black border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="you@example.com"/>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-zinc-300">Message</label>
              <textarea rows={5} className="mt-1 w-full px-3 py-2 rounded-md bg-black border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Tell us what you need"></textarea>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-500 text-black font-medium hover:bg-yellow-400">
              <Send size={16}/> Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6 bg-zinc-900/40">
            <h2 className="text-xl font-medium">Get in touch</h2>
            <p className="mt-2 text-zinc-400 text-sm">Have questions about products, sizing, or orders? Reach out.</p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone size={16}/><span>+91 90000 00000</span></div>
              <div className="flex items-center gap-3"><Mail size={16}/><span>hello@trara.co</span></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/919999999999" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-black font-medium"><MessageCircle size={16}/> WhatsApp</a>
              <a href="https://instagram.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10">Instagram</a>
              <a href="https://twitter.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10">Twitter</a>
            </div>

            <div className="mt-8">
              <div className="aspect-[16/9] rounded-xl border border-white/10 bg-zinc-950 flex items-center justify-center text-zinc-600">
                Space reserved for photoshoot images & lookbooks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
