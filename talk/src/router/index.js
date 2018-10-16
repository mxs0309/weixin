import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/login/Start'
import Login from '@/components/login/Login'
import Reg from '@/components/login/Reg'
import Talk from '@/components/pageview/Talk'
import Wxview from '@/components/pluview/Wxview'
import Talkview from '@/components/pluview/Talkview'
import Discoverview from '@/components/pluview/Discoverview'
import Meview from '@/components/pluview/Meview'
import Tianjia from '@/components/pluview/Tianjia'
import Infodetail from '@/components/pluview/Infodetail'
import Testview from '@/components/pluview/Testview'
import Talkroom from '@/components/pluview/Talkroom'
import Newfriend from '@/components/pluview/Newfriend'
import Updata from '@/components/pluview/updata'
import Forget from '@/components/login/forget'
import Yanzheng from '@/components/login/yanzheng'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/forget',
      name: 'forget',
      component:Forget
    },
    {
      path: '/yanzheng',
      name: 'yanzheng',
      component:Yanzheng
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    },
    {
      path:'/wxview',
      name:'Wxview',
      component:Wxview
    },
     {
      path:'/talkview',
      name:'Talkview',
      component:Talkview
    },
     {
      path:'/discoverview',
      name:'Discoverview',
      component:Discoverview
    },
     {
      path:'/meview',
      name:'Meview',
      component:Meview
    },
     {
      path:'/tianjia',
      name:'Tianjia',
      component:Tianjia
    },
    {
      path:'/tianjia/:netname',
      name:'Infodetail',
      component:Infodetail
    },
    {
      path:'/testview',
      name:'Testview',
      component:Testview
    },
    {
      path:'/talkroom',
      name:'Talkroom',
      component:Talkroom
    },
    {
      path:'/newfriend',
      name:'Newfriend',
      component:Newfriend
    },
    {
      path:'/updata',
      name:'Updata',
      component:Updata,

    }   
  ]
})
