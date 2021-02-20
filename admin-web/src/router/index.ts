import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        props: true,
      },
      {
        path: '/courses/list',
        name: 'courses-list',
        component: () => import( '../views/courses/CoursesList.vue' )
      },
      {
        path: '/courses/edit/:id',
        name: 'courses-edit',
        props: true,
        component: () => import( '../views/courses/CoursesEdit.vue' )
      },
      {
        path: '/courses/create',
        name: 'courses-create',
        component: () => import( '../views/courses/CoursesEdit.vue' )
      },
      {
        path: '/episodes/list',
        name: 'episodes-list',
        component: () => import( '../views/courses/Episodes.vue' )
      },
      {
        path: '/users/list',
        name: 'UsersList',
        component: () => import( '../views/users/UsersList.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
