import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails,
    props:true

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
