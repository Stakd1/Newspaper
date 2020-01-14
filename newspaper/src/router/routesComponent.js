class RoutesComponent {
  indexComponent() {
    return import('../views/Index.vue')
  }


  registerComponent() {
    return import('../views/Register.vue')
  }
  loginComponent() {
    return import('../views/Login.vue')
  }
  retrieveComponent() {
    return import('../views/Retrieve.vue')
  }
  seachComponent() {
    return import('../views/Seach.vue')
  }
  addtoComponent() {
    return import('../views/Addto.vue')
  }

  myComponent() {
    return import('../views/indexComponent/My.vue')
  }
  messageComponent() {
    return import('../views/myComponent/Message.vue')
  }
  collectionComponent() {
    return import('../views/myComponent/Collection.vue')
  }
  historyComponent() {
    return import('../views/myComponent/History.vue')
  }
  commentComponent() {
    return import('../views/myComponent/Comment.vue')
  }



  setingComponent() {
    return import('../views/myComponent/Seting.vue')
  }

  homeComponent() {
    return import('../views/indexComponent/Home.vue')
  }
  holdComponent() {
    return import('../views/homeComponent/Hold.vue')
  }

  videosComponent() {
    return import('../views/indexComponent/Video.vue')
  }
  lookComponent() {
    return import('../views/videoComponent/Look.vue')
  }


  followComponent() {
    return import('../views/indexComponent/Follow.vue')
  }
  moreComponent() {
    return import('../views/followCompnent/More.vue')
  }


}

export const routesComponent = new RoutesComponent()
