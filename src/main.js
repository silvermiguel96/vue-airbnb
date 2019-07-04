import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSKsVorv86I4h4B87JacgEpI1SmjMlCrA',
  authDomain: 'platzi-rooms-363a6.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-363a6.firebaseio.com',
  projectId: 'platzi-rooms-363a6',
  storageBucket: '',
  messagingSenderId: '260777805007',
  appId: '1:260777805007:web:9007f8177483541d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  beforecreate() {
    this.$store.dispatch('FETCH_USER', { id: store.state.authId });
  },
}).$mount('#app');
