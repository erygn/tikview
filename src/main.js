import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

import firebase from "firebase";
import firebaseConfig from "@/fb";

firebase.initializeApp(firebaseConfig);

let app = '';
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
