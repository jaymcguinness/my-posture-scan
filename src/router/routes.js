const routes = [
  {

    path: '/',
    component: () => import("layouts/Landing.vue"),
    children: [
      { path: '', component: () => import('pages/Welcome.vue') },
      { path: 'signup', component: () => import('pages/SignUp.vue') },

    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'scan', component: () => import('pages/Scan.vue') },
      { path: 'results', component: () => import('pages/Results.vue') },
      { path: 'exercises', component: () => import('pages/Exercises.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
