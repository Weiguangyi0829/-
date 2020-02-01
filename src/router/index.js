import Vue from 'vue'
import Router from 'vue-router'
import index from '_b/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'show',
      children: [{
        path: 'show',
        name: 'show',
        component: () => import('_b/show')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('_b/video')
      },
      {
        path: 'ps4',
        name: 'ps4',
        component: () => import('_b/ps4')
      },
      {
        path: 'grade',
        name: 'grade',
        component: () => import('_b/grade')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('_b/setting')
      },
    ]
    }
  ]
})
