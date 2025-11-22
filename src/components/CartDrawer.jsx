import React from 'react'

const CartDrawer = ({ open, items, onClose }) => {
  const total = items.reduce((s, i)=> s + i.price, 0)
  return (
    <div className={`fixed inset-0 z-50 ${open? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/60 transition ${open? 'opacity-100' : 'opacity-0'}`} onClick={onClose}/>
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-black border-l border-white/10 transform transition-transform ${open? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <p className="text-white text-lg font-medium">Your Cart</p>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">Close</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && (
            <p className="text-zinc-400">Your cart is empty.</p>
          )}
          {items.map((i)=> (
            <div key={i.id} className="flex items-center gap-3">
              <img src={i.img} className="w-16 h-16 object-cover rounded-md border border-white/10"/>
              <div className="flex-1">
                <p className="text-white text-sm">{i.name}</p>
                <p className="text-yellow-400 text-sm">₹{i.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-3">
            <span>Total</span>
            <span className="text-yellow-400 font-semibold">₹{total}</span>
          </div>
          <button className="w-full px-4 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
