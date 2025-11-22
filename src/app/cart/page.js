import Navbar from "@/components/Navbar";

export default function Cart() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="text-center py-8 sm:py-12">
                  <svg
                    className="mx-auto h-16 w-16 sm:h-24 sm:w-24 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-lg sm:text-xl text-gray-600 mb-2">Your cart is empty</p>
                  <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">Start adding items to your cart!</p>
                  <a
                    href="/products"
                    className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-20">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base text-gray-700">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base text-gray-700">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base text-gray-700">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 sm:pt-3 flex justify-between text-base sm:text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-2 sm:py-3 text-sm sm:text-base rounded-lg cursor-not-allowed font-medium"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

