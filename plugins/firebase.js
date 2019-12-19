import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA5MYCgRfYkYsL80w6ygQqzvdj_u0MoxVI",
    authDomain: "working-c329c.firebaseapp.com",
    databaseURL: "https://working-c329c.firebaseio.com",
    projectId: "working-c329c",
    storageBucket: "working-c329c.appspot.com",
    messagingSenderId: "12525827957",
    appId: "1:12525827957:web:9ee032ffd0e0be22bec53c",
    measurementId: "G-6ERM99Q9MQ"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase