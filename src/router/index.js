/* ROTA Q VEIO PRE FEITA PELO CLI */

/* import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router */

import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pagina1',
    name: 'Pagina1',
    component: () => import('../views/Pagina1.vue') /* UTILIZANDO LAZY LOADING  - A PAGINA SO RECARREGARA SE REALEMNTE FOR CLICADA */
  },
  {
    path: '/pagina2/:id', // PASSANDO PARAMETRO DINAMICO ID
    name: 'Pagina2',
    component: () => import('../views/Pagina2.vue')
  },
  {
    path: '/requisicao',
    name: 'requisicaoAPI',
    component: () => import('../views/RequisicaoAPI/requisicaoAPI.vue')
  },
  {
    path: '/:pathMatch(.*)*', // Captura todas as rotas que não foram encontradas
    name: 'Erro',
    component: () => import('../views/PaginaError.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;