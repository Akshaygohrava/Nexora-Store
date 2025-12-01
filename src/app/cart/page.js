'use client';

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 10.00 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Shopping Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="w-full max-w-2xl">
                {/* Beautiful Empty State */}
                <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl p-8 sm:p-12 text-center">
                  {/* Animated Icon Container */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      {/* Animated background circles */}
                      <div className="absolute inset-0 rounded-full bg-indigo-100 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-full bg-indigo-50 animate-pulse animation-delay-200"></div>
                      
                      {/* Shopping cart icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 animate-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    Your cart is empty
                  </h2>
                  
                  {/* Subheading */}
                  <p className="text-lg text-gray-600 mb-2">
                    Looks like you haven't added anything yet
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mb-8">
                    Browse our amazing collection and find something you love!
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px bg-linear-to-r from-transparent to-indigo-300 flex-1"></div>
                    <span className="text-gray-400">✨</span>
                    <div className="h-px bg-linear-to-l from-transparent to-indigo-300 flex-1"></div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                      href="/products"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-linear-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-linear-to-r from-indigo-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center gap-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        Start Shopping
                      </span>
                    </Link>
                    
                    <Link
                      href="/categories"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white border-2 border-indigo-200 rounded-xl hover:border-indigo-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        Explore Categories
                      </span>
                    </Link>
                  </div>

                  {/* Benefits Section */}
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100">
                    <p className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">Why Shop With Us?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Free Shipping</p>
                        <p className="text-xs text-gray-500">on orders over $50</p>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Easy Returns</p>
                        <p className="text-xs text-gray-500">30-day guarantee</p>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">24/7 Support</p>
                        <p className="text-xs text-gray-500">always here to help</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promotional Banner */}
                <div className="mt-8 bg-linear-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎉</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">
                        Special Offer!
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        First-time customers get 10% off their first order!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        {/* Product Image */}
                        <div className="relative w-full sm:w-24 h-48 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          ></div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-lg sm:text-xl font-bold text-indigo-600">
                              ${item.price}
                            </p>
                            {item.originalPrice && (
                              <p className="text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </p>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors font-semibold"
                            >
                              −
                            </button>
                            <span className="w-12 text-center font-semibold text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors font-semibold"
                            >
                              +
                            </button>
                          </div>

                          {/* Price and Remove */}
                          <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                            <p className="text-lg sm:text-xl font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-105 active:scale-95 font-medium text-sm sm:text-base flex items-center gap-2"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1 order-1 lg:order-2">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-20">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex justify-between text-sm sm:text-base text-gray-700">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base text-gray-700">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base text-gray-700">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 sm:pt-3 flex justify-between text-base sm:text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium text-sm sm:text-base"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <Link
                    href="/products"
                    className="block w-full mt-3 text-center text-indigo-600 hover:text-indigo-700 font-medium text-sm sm:text-base transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
