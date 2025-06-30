import React from 'react';
import { ShoppingBag, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">StyleStore</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary-600">New Arrivals</a>
            <a href="#" className="hover:text-primary-600">Women</a>
            <a href="#" className="hover:text-primary-600">Men</a>
            <a href="#" className="hover:text-primary-600">Accessories</a>
            <a href="#" className="hover:text-primary-600">Sale</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;