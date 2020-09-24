import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Recommend = () => import('@/views/home/childpos/homeconent/recommend/Recommend')
const Phone = () => import('@/views/home/childpos/homeconent/phone/Phone')
const Smart = () => import('@/views/home/childpos/homeconent/smart/Smart')
const Television = () => import('@/views/home/childpos/homeconent/television/Television')
const Notebook = () => import('@/views/home/childpos/homeconent/notebook/Notebook')
const Homeapps = () => import('@/views/home/childpos/homeconent/homeapps/Homeapps')
const Life = () => import('@/views/home/childpos/homeconent/life/Life')

const Category = () => import('@/views/category/Category')
const Planet = () => import('@/views/planet/Planet')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')

const routes = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: 'recommend' },
      { path: 'recommend', component: Recommend },
      { path: 'phone', component: Phone },
      { path: 'smart', component: Smart },
      { path: 'television', component: Television },
      { path: 'notebook', component: Notebook },
      { path: 'homeapps', component: Homeapps },
      { path: 'life', component: Life },
    ]
  },
  { path: '/category', component: Category },
  { path: '/planet', component: Planet },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
  { path: '/detail', component: Detail }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
