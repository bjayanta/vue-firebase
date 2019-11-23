import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwT_rV4mzGpau3njCtoiiogollW9c531c",
  authDomain: "vue-firebase-78ee7.firebaseapp.com",
  databaseURL: "https://vue-firebase-78ee7.firebaseio.com",
  projectId: "vue-firebase-78ee7",
  storageBucket: "vue-firebase-78ee7.appspot.com",
  messagingSenderId: "1011191564774",
  appId: "1:1011191564774:web:b33d1bdc646a43edc7ae27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
