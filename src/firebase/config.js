 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCSLux9BIa3rPX6MKwdxedBcWffL-2YDts",
    authDomain: "firegram-862b0.firebaseapp.com",
    databaseURL: "https://firegram-862b0.firebaseio.com",
    projectId: "firegram-862b0",
    storageBucket: "firegram-862b0.appspot.com",
    messagingSenderId: "48377710522",
    appId: "1:48377710522:web:962894b6196af8de403f83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();  
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timeStamp}