const path = require('path')
import { defineConfig } from 'vite';

export default defineConfig ({
  root: path.resolve(__dirname, 'src'),
  base:'/vacations-destinations/',
  publicDir: 'public',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})
