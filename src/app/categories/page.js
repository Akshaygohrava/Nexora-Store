'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryProducts = useMemo(() => {
    if (!selectedCategory) return null;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Shop by Category
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Explore our diverse range of products organized by category
            </p>
          </div>

          {!selectedCategory ? (
            <>
              {/* Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {categories.map((category) => {
                  const categoryProductCount = products.filter(
                    p => p.category === category.name
                  ).length;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="aspect-4/3 relative">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center px-4">
                            {category.name}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-200">
                            {categoryProductCount} products
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {/* Back Button & Category Header */}
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm sm:text-base mb-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Categories
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Showing {categoryProducts.length} products
                </p>
              </div>

              {/* Category Products Grid */}
              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
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
                  <p className="text-gray-600">
                    This category currently has no products available
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

