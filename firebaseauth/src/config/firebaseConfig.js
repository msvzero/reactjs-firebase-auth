 // Your web app's Firebase configuration
 import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyBhjA6NBwQ4GsUd9btzKfOPew0AbdQV8mI",
    authDomain: "playground-2019-b128f.firebaseapp.com",
    databaseURL: "https://playground-2019-b128f.firebaseio.com",
    projectId: "playground-2019-b128f",
    storageBucket: "playground-2019-b128f.appspot.com",
    messagingSenderId: "332640111952",
    appId: "1:332640111952:web:fae2e2e9f39eaa8981b055"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;