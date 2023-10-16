import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs

  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true

  },{
    path: '/all-jobs',
    redirect:'/jobs'
  },{
    path:'/:catchAll(.*)',
    name:"PageNotFound",
    component:PageNotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
