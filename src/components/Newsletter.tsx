import React from 'react';
import { useNewsletterForm } from '@/hooks/useNewsletter';

const Newsletter = () => {
  const { email, handleSubmit, handleEmailChange, isLoading, error, success } = useNewsletterForm();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">Get the latest updates about new products and special offers</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="input flex-1"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {error && (
            <p className="mt-2 text-red-600 text-sm">{error}</p>
          )}
          {success && (
            <p className="mt-2 text-green-600 text-sm">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;