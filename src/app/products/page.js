import Navbar from "@/components/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Products</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Browse our wide selection of quality products
            </p>
          </div>
          
          {/* Products Grid Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Product cards will go here */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-3 sm:mb-4"></div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Product Name</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">$99.99</p>
              <button className="w-full bg-indigo-600 text-white py-2 text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

