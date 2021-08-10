import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//firebase
import { fb } from './firebase'

//Bootstrap & Custom CSS
import '@popperjs/core';
import 'bootstrap';
import './assets/app.scss';

//check if user is logged in before loading app
fb.auth().onAuthStateChanged((user) => {

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //var uid = user.uid;
    // ...

    //send it
    createApp(App).use(store).use(router).mount('#app')

    // User is signed out
    // ...

});