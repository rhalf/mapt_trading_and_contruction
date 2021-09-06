import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Clients from '../views/Services.vue'
import Projects from '../views/Services.vue'
import Personnels from '../views/Services.vue'
import Vehicles from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
// import MyAccount from '../views/MyAccount.vue'
// import AccountProfile from '../views/AccountProfile.vue'
// import AccountPassword from '../views/AccountPassword.vue'


// import MySettings from '../views/MySettings.vue'
// import SettingShop from '../views/SettingShop.vue'
// import SettingShipping from '../views/SettingShipping.vue'
// import SettingAddress from '../views/SettingAddress.vue'
// import SettingPayment from '../views/SettingPayment.vue'


// import OrderInfo from '../views/OrderInfo.vue'

// import Accounts from '../views/Accounts.vue'
// import AccountsAll from '../views/AccountsAll.vue'

// import Libraries from '../views/Libraries.vue'
// import LibrariesWarranties from '../views/LibrariesWarranties.vue'
// import LibrariesBrands from '../views/LibrariesBrands.vue'
// import LibrariesCategories from '../views/LibrariesCategories.vue'


// import MyProducts from '../views/MyProducts.vue'
// import ProductsAll from '../views/ProductsAll.vue'
// import ProductsOutOfStock from '../views/ProductsOutOfStock.vue'
// import ProductsSoldOut from '../views/ProductsSoldOut.vue'


// import firebase from '../plugins/firebase'

// var auth = firebase.auth()

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/Home",
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/Clients',
    name: 'Clients',
    component: Clients,
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/Personnels',
    name: 'Personnels',
    component: Personnels,
  },
  {
    path: '/Vehicles',
    name: 'Vehicles',
    component: Vehicles,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   auth.onAuthStateChanged((user) => {
//     let authenticated = to.matched.some(record => record.meta.authenticated)
//     if (user && authenticated) next()
//     else if (user && !authenticated) next("/Home")
//     else if (!user && authenticated) next("/")
//     else if (!user && !authenticated) next()
//   });
// })

export default router