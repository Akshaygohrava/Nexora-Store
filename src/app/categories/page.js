import Navbar from "@/components/Navbar";

export default function Categories() {
  const categories = [
    { name: "Electronics", count: 120 },
    { name: "Clothing", count: 85 },
    { name: "Home & Living", count: 65 },
    { name: "Sports & Outdoors", count: 45 },
    { name: "Books", count: 200 },
    { name: "Toys & Games", count: 90 },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Categories</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Explore products by category
            </p>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-4 sm:p-6 transform hover:scale-105"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

