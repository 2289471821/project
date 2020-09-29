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

const Login = () => import('@/views/Login')
const Settlement = () => import('@/views/Settlement')


// 页面刷新时，重新赋值token
// if (sessionStorage.token) {
//   store.commit('setToken', sessionStorage.token);
// }  

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
  { path: '/detail', component: Detail },
  { path: '/login', component: Login },
  { 
    path: '/settlement', 
    component: Settlement,
    meta: { requiresAuth: true }
    // beforeEnter: (to, from, next) => {
    //   console.log('settlement');
    //   let token = sessionStorage.token;
    //   console.log(token);
    //   if(token == 'null' || token == '') {
    //     alert('您还没有登录，请登录后结算')
    //     next({ path: '/login'});
    //   }else {
    //     next();
    //   }
    // }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('全局前置守卫');
  //这里的requiresAuth为路由中定义的 meta:{requiresAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
  if(to.matched.some(r => r.meta.requiresAuth)) {
    const token = sessionStorage.token;     
    if(token) {
      next();
    }else {
      alert('您还没有登录，请登录后结算~~~')
      next({path: '/login'})
    }
  }
  else {
    next();
  }
})

export default router
