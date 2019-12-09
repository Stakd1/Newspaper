class RoutesComponent {
  indexComponent() {
    return import('../views/Index.vue')
  }


  registerComponent() {
    return import('../views/Register.vue')
  }
}

export const routesComponent = new RoutesComponent()
