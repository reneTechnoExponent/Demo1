import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-[70vh] bg-gray-100">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container-custom relative h-full flex items-center justify-between">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-4">New Season Arrivals</h1>
            <p className="text-xl mb-8">Discover the latest trends in fashion</p>
            <button className="btn bg-white text-gray-900 hover:bg-gray-100">
              Shop Now
            </button>
          </div>
          <div className="relative z-10">
            <img 
              src="/hero-product.png" 
              alt="Featured Product" 
              className="w-[500px] h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-6 text-center">
              <i className="fas fa-shipping-fast text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
            <div className="feature-card p-6 text-center">
              <i className="fas fa-undo text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature-card p-6 text-center">
              <i className="fas fa-headset text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Customer service support</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Hero;