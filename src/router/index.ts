import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainBase from '../views/MainBase.vue'
import ListView from '../views/Inicio/ListView.vue'
import AboutView from '../views/AboutView.vue'
import EditView from '../views/Inicio/EditView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainBase,
    children: [
      {
        path: '/home/inicio/List',
        name: 'ListView',
        component: ListView
      },
      { /* Se agrega la ruta de la nueva vista */
        path: '/home/inicio/about',
        name: 'AboutView',
        component: AboutView
      },
      { /* Se agrega la ruta de la nueva vista */
      path: '/home/inicio/edit',
      name: 'EditView',
      component: EditView
    }
    ] 
  }
]

const router = new VueRouter({
  routes
})

export default router
