'use client';

import { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        result = result.sort((a, b) => {
          if (a.badge === 'Sale' && b.badge !== 'Sale') return -1;
          if (a.badge !== 'Sale' && b.badge === 'Sale') return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [selectedCategory, sortBy, searchTerm]);

  // Get displayed products
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const hasMoreProducts = displayCount < filteredProducts.length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              All Products
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Browse our wide selection of {filteredProducts.length} quality products
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              {/* Category Filter */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                      selectedCategory === 'All'
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                        selectedCategory === category.name
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name} ({products.filter(p => p.category === category.name).length})
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'newest', label: 'Newest' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                    { value: 'rating', label: 'Top Rated' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                        sortBy === option.value
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="mb-4 text-sm text-gray-600">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {displayedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {hasMoreProducts && (
                    <div className="mt-8 sm:mt-12 flex justify-center">
                      <button
                        onClick={() => setDisplayCount(prev => prev + ITEMS_PER_PAGE)}
                        className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg text-white bg-linear-to-r from-indigo-600 to-indigo-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-linear-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Button content */}
                        <span className="relative flex items-center gap-2">
                          Load More Products
                          <svg 
                            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                          </svg>
                        </span>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 group-hover:animate-pulse bg-white"></div>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchTerm('');
                      setDisplayCount(ITEMS_PER_PAGE);
                    }}
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

