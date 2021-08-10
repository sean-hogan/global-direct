import firebase from 'firebase';
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB7o49IZGrouuuRMlx85WCMO45eN-8a5cA",
    authDomain: "global-direct.firebaseapp.com",
    projectId: "global-direct",
    storageBucket: "global-direct.appspot.com",
    messagingSenderId: "541199428708",
    appId: "1:541199428708:web:16d7876090f05fc0468371",
    measurementId: "G-XQ00YRXY4F"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
firebase.analytics();