import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

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
        component: () => import('@/components/show')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/components/video')
      },
      {
        path: 'ps4',
        name: 'ps4',
        component: () => import('@/components/ps4')
      },
      {
        path: 'grade',
        name: 'grade',
        component: () => import('@/components/grade')
      },
      {
        path: 'sekiro',
        name: 'sekiro',
        component: () => import('@/components/sekiro')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/components/setting')
      },
    ]
    }
  ]
})
