import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { VueFire, VueFireAuth } from 'vuefire'
// import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(
  router,
  // VueFire, {
  //   firebaseApp,
  //   modules: [
  //     VueFireAuth(),
  //   ]
  // }
)

app.mount('#app')
