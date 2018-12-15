import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './../views/LoginPage.vue'
import MainPage from './../views/MainPage.vue'
import NewsPage from './../views/NewsPage.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage,
      // component: () => import('./../views/LoginPage.vue'),
    },
    {
      path: '/main',
      component: MainPage,
    },
    {
      path: '/news',
      component: NewsPage,
    },
    // {
    //   path: '/list',
    //   components: Products,
    //   beforeEnter: (to, from, next) => {
    //     this.fetchData();
    //   }
    // }
  ]
})


