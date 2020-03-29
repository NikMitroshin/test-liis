import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACmU9TAGrgRZKGGLmhQfJSL8qnSZtJr70",
    authDomain: "test-liis.firebaseapp.com",
    databaseURL: "https://test-liis.firebaseio.com",
    projectId: "test-liis",
    storageBucket: "test-liis.appspot.com",
    messagingSenderId: "1021392187633",
    appId: "1:1021392187633:web:d5b0cea0bf9d350652f950",
    measurementId: "G-NNX50C3XB4"
  };
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;