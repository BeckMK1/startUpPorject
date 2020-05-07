import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBuQolM6BmhrVqxvYQbbM03JDy9TjP7g9E",
    authDomain: "startupproject-7b252.firebaseapp.com",
    databaseURL: "https://startupproject-7b252.firebaseio.com",
    projectId: "startupproject-7b252",
    storageBucket: "startupproject-7b252.appspot.com",
    messagingSenderId: "510366463190",
    appId: "1:510366463190:web:cb1bb9a6ca7976aaba8577"
  })
  .firestore()

export const postRef = db.collection('posts')
