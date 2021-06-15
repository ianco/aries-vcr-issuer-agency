import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Schema from '@/views/Schema.vue';

import AppRouterView from '@/components/app/AppRouterView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'Profile',
        component: AppRouterView,
        children: [
          {
            path: 'edit',
            name: 'EditProfile',
            component: Profile
          }
        ]
      },
      {
        path: 'schema',
        name: 'Schema',
        component: AppRouterView,
        children: [
          {
            path: 'add',
            name: 'AddSchema',
            component: Schema
          },
          {
            path: ':id/edit',
            name: 'EditSchema',
            component: Schema
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
