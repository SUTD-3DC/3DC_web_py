import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'

// This is to auto import all the components
// and map the endpoint with the component
// const routerOptions = [
//   { path: '/', component: 'Home' },
//   { path: '/about', component: 'About' }
// ]
// const routes = routerOptions.map(route => {
//   return {
//     ...route,
//     component: () => import(`@/components/${route.component}.vue`)
//   }
// })

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: NotFound
    }
  ]
})
