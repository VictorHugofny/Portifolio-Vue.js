import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projetos from  '../views/Projetos.vue'
import Contatos from '../views/Contatos.vue'
import Academico from '../views/Academico.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  },
  {
    path: '/Contatos',
    name: 'Contatos',
    component: Contatos
  },
  {
    path: '/Academico',
    name: 'Academico',
    component: Academico
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
