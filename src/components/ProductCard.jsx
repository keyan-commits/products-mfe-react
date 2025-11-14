import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer',
      background: 'white',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      e.currentTarget.style.borderColor = '#2196F3';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = '#e0e0e0';
    }}>
      <div style={{ fontSize: '56px', marginBottom: '12px' }}>
        {product.icon}
      </div>
      <h3 style={{ 
        fontSize: '16px', 
        marginBottom: '8px',
        color: '#333',
        fontWeight: '600'
      }}>
        {product.name}
      </h3>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#4CAF50',
        marginBottom: '15px'
      }}>
        ${product.price}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          width: '100%',
          padding: '12px',
          background: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#1976D2';
          e.target.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#2196F3';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}