import {
  routesComponent
} from './routesComponent'
export default [{
    //登录
    path: '/register',
    name: 'register',
    component: routesComponent.registerComponent
  },
  {
    path: '/index',
    name: 'index',
    component: routesComponent.indexComponent
  },

  {
    path: '*',
    redirect: {
      name: 'register'
    }
  }
]
