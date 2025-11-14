import React from 'react';
import ProductCard from './components/ProductCard';

const PRODUCTS = [
  { id: 1, name: 'MacBook Pro', price: 2399, icon: '💻' },
  { id: 2, name: 'iPhone 15 Pro', price: 1199, icon: '📱' },
  { id: 3, name: 'AirPods Max', price: 549, icon: '🎧' },
  { id: 4, name: 'Apple Watch', price: 429, icon: '⌚' },
  { id: 5, name: 'iPad Pro', price: 1099, icon: '📱' },
  { id: 6, name: 'Magic Keyboard', price: 299, icon: '⌨️' },
];

export default function ProductsApp() {
  const handleAddToCart = (product) => {
    // Dispatch custom event for other MFEs
    window.dispatchEvent(
      new CustomEvent('addToCart', { 
        detail: product 
      })
    );
    
    // Visual feedback
    console.log('✅ Added to cart:', product.name);
  };

  return (
    <div>
      <h2 style={{ 
        fontSize: '24px', 
        marginBottom: '8px',
        color: '#333',
        fontWeight: '700'
      }}>
        Product Catalog
      </h2>
      <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '20px'
      }}>
        Browse our premium collection
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
      }}>
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}