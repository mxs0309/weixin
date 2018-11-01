import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from  '@/components/Tuijian'
import Homecook from '@/components/Homecook'
import MenuDetail from '@/components/MenuDetail'
import Meiwei from '@/components/meiwei'
import Sancan from '@/components/Sancan'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     name: 'Tuijian',
     component: Tuijian
    },
    {
     path: '/homecook/:menu',
     name: 'Homecook',
     component: Homecook
    },
    {
     path: '/menudetail/:menuName',
     name: 'MenuDetail',
     component: MenuDetail
    },
    {
     path: '/Meiwei/:menu/:name',
     name: 'Meiwei',
     component: Meiwei
    },
    {
     path: '/Sancan/:menu',
     name: 'Sancan',
     component: Sancan
    }
  ]
})
