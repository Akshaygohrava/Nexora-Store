'use client';

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Nexora Store</h1>
          
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Welcome to Nexora Store, your trusted destination for quality products. 
                We are committed to providing you with the best shopping experience, 
                offering a wide range of products that meet your needs and exceed your expectations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our mission is to deliver exceptional value to our customers through 
                high-quality products, excellent customer service, and a seamless shopping experience. 
                We believe in building long-lasting relationships with our customers.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                <li>Wide selection of quality products</li>
                <li>Competitive prices</li>
                <li>Fast and reliable shipping</li>
                <li>Excellent customer support</li>
                <li>Secure payment options</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

