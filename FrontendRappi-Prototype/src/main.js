import { createApp, reactive } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Importación de vistas
import HomeView from './views/HomeView.vue'
import CartView from './views/CartView.vue'
import ProductView from './views/ProductView.vue'
import LoginView from './views/Login.vue'   // <-- FALTABA ESTO

// Store global
export const store = reactive({
  cart: [],

  addToCart(product) {
    const existing = this.cart.find(p => p.id === product.id)
    if (existing) existing.qty++
    else this.cart.push({ ...product, qty: 1 })
  },

  removeFromCart(product) {
    const item = this.cart.find(p => p.id === product.id)
    if (item && item.qty > 1) item.qty--
    else this.cart = this.cart.filter(p => p.id !== product.id)
  }
})

// Rutas
const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView },
  { path: '/restaurant/:id', component: ProductView },
  { path: '/login', component: LoginView }    // <-- ESTA RUTA YA FUNCIONA
]

// Configurar Router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Crear e iniciar app
createApp(App).use(router).mount('#app')
