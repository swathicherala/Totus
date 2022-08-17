import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ServicesPage from '../components/ServicesPage.vue'
import AboutUs from '../components/AboutUs.vue'
import ArchitectHub from '../components/ArchitectHub.vue'
import ContactUs from '../components/ContactUs.vue'
import BespokeBuilding from '../components/BespokeBuilding.vue'
import DesignPlanning from '../components/DesignPlanning.vue'
// import UpdateData from '../components/UpdateData.vue'
// import UserData from '../components/UserData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/services',
    name: 'services',
    component:ServicesPage,
    children: [
      {
        path: 'bespoke',
        name: 'bespoke',
        component: BespokeBuilding,
      },
      {
      path: 'design',
      name: 'design',
      component: DesignPlanning,
    }  
  ]
  },
  {
    path: '/about',
    name: 'about',
    component:AboutUs
  },
  {
    path: '/architect',
    name: 'architect',
    component:ArchitectHub
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactUs
  },
  // {
  //   path: '/update',
  //   name: 'update',
  //   component:UpdateData
  // },
  // {
  //   path: '/userdata',
  //   name: 'userdata',
  //   component:UserData
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
