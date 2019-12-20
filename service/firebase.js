import firebase from 'firebase'

if (!firebase.apps.length) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrEg-nlb1QfXgASQBq27Rd9dJQO7Qoba0",
    authDomain: "working-login.firebaseapp.com",
    databaseURL: "https://working-login.firebaseio.com",
    projectId: "working-login",
    storageBucket: "working-login.appspot.com",
    messagingSenderId: "484288465810",
    appId: "1:484288465810:web:a3b2ceb80a71685c634f4b",
    measurementId: "G-8TP4H49Y4N"
  };
  firebase.initializeApp(config);}

export default firebase