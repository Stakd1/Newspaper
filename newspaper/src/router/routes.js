import {
  routesComponent
} from './routesComponent'
export default [{
    //注册
    path: '/register',
    name: 'register',
    component: routesComponent.registerComponent
  },
  {
    //登录
    path: '/login',
    name: 'login',
    component: routesComponent.loginComponent
  },

  {
    //找回密码
    path: '/retrieve',
    name: 'retrieve',
    component: routesComponent.retrieveComponent
  },

  {
    path: '/index',
    name: 'index',
    component: routesComponent.indexComponent,

    children: [{
        path: '/my',
        name: 'my',
        component: routesComponent.myComponent
      },
      {
        path: '/home',
        name: 'home',
        component: routesComponent.homeComponent
      },
      {
        path: '/videos',
        name: 'videos',
        component: routesComponent.videosComponent
      },
      {
        path: '/follow',
        name: 'follow',
        component: routesComponent.followComponent
      },
      {
        path: '/more',
        name: 'more',
        component: routesComponent.moreComponent
      },
    ],

    path: '/home',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/seting',
    name: 'seting',
    component: routesComponent.setingComponent
  },
  {
    path: '/look',
    name: 'look',
    component: routesComponent.lookComponent
  },

  {
    path: '/hold',
    name: 'hold',
    component: routesComponent.holdComponent
  },


  {
    path: '*',
    redirect: {
      name: 'login'
    }
  }
]
