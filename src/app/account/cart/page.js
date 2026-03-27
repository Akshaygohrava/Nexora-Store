"use client";

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">My Cart</h1>
        {cartItems.length === 0 ? (
          <div>Your cart is empty. <Link href="/products" className="text-indigo-600 hover:underline">Shop now</Link></div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-indigo-600 font-bold">${item.price}</span>
                    <span className="text-gray-500 text-sm">x {item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
              </div>
            ))}
            <div className="text-right font-bold text-xl mt-4">Total: ${getCartTotal()}</div>
          </div>
        )}
      </main>
    </>
  );
}
