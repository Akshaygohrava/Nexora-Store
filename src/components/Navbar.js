'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/products', label: 'Products', icon: '🛍️' },
    { href: '/categories', label: 'Categories', icon: '📂' },
    { href: '/about', label: 'About', icon: 'ℹ️' },
    { href: '/contact', label: 'Contact', icon: '📧' },
  ];

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              Nexora Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 md:ml-12">
            <Link 
              href="/" 
              className="relative text-gray-700 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-105 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/products" 
              className="relative text-gray-700 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-105 group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/categories" 
              className="relative text-gray-700 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-105 group"
            >
              Categories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-gray-700 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-105 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-700 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-105 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:max-w-md lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
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
              {/* Cart Badge */}
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Account Icon */}
            <Link
              href="/account"
              className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button - Animated */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Beautiful Slide-in Animation */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          ></div>

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-linear-to-b from-indigo-50 to-white shadow-2xl flex flex-col transition-all duration-300">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-5 border-b-2 border-indigo-200 bg-linear-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-5 border-b-2 border-indigo-200 bg-white transition-all duration-300">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pl-12 text-base border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-400"
                />
                <svg
                  className="absolute left-4 top-3.5 h-5 w-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3 transition-all duration-300">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-5 py-4 text-lg font-bold text-gray-800 hover:text-white bg-white hover:bg-linear-to-r hover:from-indigo-600 hover:to-indigo-700 rounded-xl transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:shadow-lg active:scale-95"
                    onClick={(e) => {
                      // Close menu and reset search immediately
                      setIsMenuOpen(false);
                      setSearchTerm('');
                    }}
                  >
                    <span className="mr-4 text-2xl transition-transform duration-300 group-hover:scale-125">
                      {item.icon}
                    </span>
                    <span className="transition-all duration-300">{item.label}</span>
                  </Link>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <svg
                    className="h-12 w-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-lg font-semibold text-gray-500">No items found</p>
                  <p className="text-sm text-gray-400">Try a different search</p>
                </div>
              )}
            </div>

            {/* Menu Footer */}
            <div className="p-5 border-t-2 border-indigo-200 bg-white space-y-3 transition-all duration-300">
              <Link
                href="/cart"
                className="flex items-center justify-between px-5 py-3 text-lg font-bold text-gray-800 hover:text-white bg-indigo-50 hover:bg-linear-to-r hover:from-indigo-600 hover:to-indigo-700 rounded-xl transition-all duration-300 transform hover:translate-x-1 hover:shadow-lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  setSearchTerm('');
                }}
              >
                <span className="flex items-center">
                  <span className="mr-4 text-2xl">🛒</span>
                  Cart
                </span>
                {getCartCount() > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              <Link
                href="/account"
                className="flex items-center px-5 py-3 text-lg font-bold text-gray-800 hover:text-white bg-indigo-50 hover:bg-linear-to-r hover:from-indigo-600 hover:to-indigo-700 rounded-xl transition-all duration-300 transform hover:translate-x-1 hover:shadow-lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  setSearchTerm('');
                }}
              >
                <span className="mr-4 text-2xl">👤</span>
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

