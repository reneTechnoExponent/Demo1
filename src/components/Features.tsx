import React from 'react';
import { Truck, RefreshCw, Shield, Clock } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <Truck className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <RefreshCw className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-gray-600">30 day return policy</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-primary-600" />
            <div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;