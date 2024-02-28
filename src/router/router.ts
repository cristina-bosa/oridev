import {createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHistory(),
  routes: [
   
   {
      path: '/',
      name: 'UnderConstruction',
      component: () => import ("../views/UnderConstruction.vue")
    },
    // {
    //   path: '/experience',
    //   name: 'Experience',
    //   component: () => import ("../views/ExperienceView.vue") 
    // },
    // {
    //   path:'/education',
    //   name: 'Education',
    //   component: () => import ("../views/EducationView.vue")
    // },
    // {
    //   path: '/projects',
    //   name: 'Project',
    //   component: () => import ("../views/ProjectsView.vue") 
    // },
    // {
    //   path: '/about-me',
    //   name: 'About me',
    //   component: () => import ("../views/AboutMeView.vue") 
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import ("../views/NotFoundView.vue")
    }
  ]
})

export default Router
/**
 *  {
      path :'/:locale?',
      component: RouterView,
      beforeEnter: translation.routeMiddleware,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import ("../views/HomeView.vue")
        },
        {
          path: 'experience',
          name: 'Experience',
          component: () => import ("../views/ExperienceView.vue") 
        },
        {
          path:'education',
          name: 'Education',
          component: () => import ("../views/EducationView.vue")
        },
        {
          path: 'projects',
          name: 'Project',
          component: () => import ("../views/ProjectsView.vue") 
        },
        {
          path: 'about-me',
          name: 'About me',
          component: () => import ("../views/AboutMeView.vue") 
        }
      ]
    }
  ]
 */