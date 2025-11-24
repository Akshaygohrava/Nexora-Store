'use client';

import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  // Hero Carousel Products
  const heroProducts = [
    {
      title: "New Collection 2025",
      description: "Discover the latest trends in fashion and style",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      link: "/products",
      price: "Starting at $29.99"
    },
    {
      title: "Electronics Sale",
      description: "Up to 50% off on premium electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
      link: "/categories",
      price: "Save up to $500"
    },
    {
      title: "Home & Living",
      description: "Transform your space with our curated collection",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
      link: "/products",
      price: "Free Shipping"
    }
  ];

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.5,
      badge: "Sale"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.8,
      badge: "New"
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.3
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
      rating: 4.6,
      badge: "Sale"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      rating: 4.7
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
      rating: 4.4,
      badge: "Hot"
    },
    {
      id: 7,
      name: "Smart Fitness Band",
      price: 72.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      badge: "Trending"
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
      rating: 4.2,
      badge: "Sale"
    }
  ];

  // Categories
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
      count: 120,
      link: "/categories"
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      count: 85,
      link: "/categories"
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      count: 65,
      link: "/categories"
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      count: 45,
      link: "/categories"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Carousel Section */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <ProductCarousel products={heroProducts} title="Featured Collections" />
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-sm sm:text-base text-gray-600">Explore our wide range of products</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-[4/3] relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${category.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{category.name}</h3>
                      <p className="text-sm sm:text-base text-gray-200">{category.count} products</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
                <p className="text-sm sm:text-base text-gray-600">Handpicked just for you</p>
              </div>
              <Link
                href="/products"
                className="hidden sm:block text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/products"
                className="inline-block text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 sm:p-12 md:p-16">
              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Summer Sale - Up to 50% Off!
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8">
                  Don't miss out on our biggest sale of the year. Limited time offer!
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  Shop Now
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-sm sm:text-base text-gray-600">Most popular products this month</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Get the latest updates on new products and exclusive offers
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
