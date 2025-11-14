import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductsApp from './ProductsApp';

let root = null;

export function mount(elementId) {
  const container = document.getElementById(elementId);
  if (container) {
    root = createRoot(container);
    root.render(<ProductsApp />);
    console.log('✅ Products MFE mounted successfully');
  } else {
    console.error('❌ Products MFE: Container element not found:', elementId);
  }
}

export function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}

// Standalone mode
if (process.env.NODE_ENV === 'development' && !window.location.port.includes('3000')) {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    const standaloneRoot = createRoot(devRoot);
    standaloneRoot.render(
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '20px' }}>Products MFE - Standalone Mode</h1>
        <ProductsApp />
      </div>
    );
  }
}