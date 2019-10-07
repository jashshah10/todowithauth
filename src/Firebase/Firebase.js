import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAeAkYxxcjKSF0-GIjmKZxMAOqnvFXAyH4",
    authDomain: "todolist-cloud.firebaseapp.com",
    databaseURL: "https://todolist-cloud.firebaseio.com",
    projectId: "todolist-cloud",
    storageBucket: "todolist-cloud.appspot.com",
    messagingSenderId: "340038626105",
    appId: "1:340038626105:web:16e74b1d7c7371421e96e8",
    measurementId: "G-4TKBLW48VZ"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
