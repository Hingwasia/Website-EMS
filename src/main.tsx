import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializePerformanceOptimizations } from './utils/preload'

// Initialize performance optimizations
initializePerformanceOptimizations();

// Get root element with error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create root with concurrent features
const root = createRoot(rootElement);

// Render app with error boundary wrapper
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
