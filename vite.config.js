// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        shop: resolve(__dirname, './shop/shop.html'),
        detail: resolve(__dirname, './detail/detail.html'),
        cart: resolve(__dirname, './cart/cart.html'),
        checkout: resolve(__dirname, './checkout/checkout.html'),
        login: resolve(__dirname, './login/login.html'),
      },
    },
  },
})