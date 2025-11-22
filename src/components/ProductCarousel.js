'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductCarousel({ products, title, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoPlay && !isHovered && products.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isHovered, products.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-full">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                </div>
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                        {product.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 animate-fade-in-delay">
                        {product.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={product.link || '/products'}
                          className="inline-block bg-indigo-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 text-center font-semibold text-sm sm:text-base"
                        >
                          Shop Now
                        </Link>
                        {product.price && (
                          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-lg sm:text-xl">
                            {product.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-indigo-600'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

