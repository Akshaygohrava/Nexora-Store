'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <Link href={`/products/${product.id || '#'}`}>
        <div className="relative aspect-square bg-gray-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg sm:text-xl font-bold text-indigo-600">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.rating && (
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <button
          onClick={handleAddToCart}
          className={`w-full py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 transform ${
            isAdding
              ? 'bg-green-500 text-white scale-95'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95'
          } shadow-md hover:shadow-lg`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Added!
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
}

