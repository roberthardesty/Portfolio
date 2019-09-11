import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about-me',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/my-work',
      name: 'Work',
      component: () => import('@/views/Work.vue'),
    },
    {
      path: '/contact-me',
      name: 'Contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
});
