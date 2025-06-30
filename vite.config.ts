import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable code splitting and optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Separate UI libraries
          ui: ['react-icons/fa'],
          // Separate utility libraries
          utils: ['@emailjs/browser', 'react-helmet-async']
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Enable source maps only for development
    sourcemap: false,
    // Optimize bundle size
    minify: 'esbuild',
    // Set target for better compatibility and performance
    target: 'es2015',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable compression
    reportCompressedSize: true
  },
  // Enable dependency pre-bundling optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@emailjs/browser'] // Load only when needed
  },
  // Enable server-side optimizations for development
  server: {
    // Optimize HMR
    hmr: {
      overlay: false
    }
  },
  // Enable build optimizations
  esbuild: {
    // Remove console logs and debugger statements in production
    drop: ['console', 'debugger']
  }
})
