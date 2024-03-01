import {createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHistory(),
  routes: [
   
   {
      path: '/',
      name: 'Home',
      component: () => import ("../views/HomeView.vue")
    },
    {
      path:'/contact',
      name: 'Contact',
      component: () => import ("../views/ContactView.vue")
    },
    {
      path: '/projects',
      name: 'Project',
      component: () => import ("../views/ProjectsView.vue") 
    },
    {
      path: '/about',
      name: 'About me',
      component: () => import ("../views/AboutMeView.vue") 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import ("../views/NotFoundView.vue")
    }
  ]
})

export default Router