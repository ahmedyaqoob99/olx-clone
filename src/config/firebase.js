import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAOSDc4KjhWsBOXeppwxXdG3vVCpvveMkg",
    authDomain: "olx-clone-20f3c.firebaseapp.com",
    databaseURL: "https://olx-clone-20f3c.firebaseio.com",
    projectId: "olx-clone-20f3c",
    storageBucket: "olx-clone-20f3c.appspot.com",
    messagingSenderId: "975100935527",
    appId: "1:975100935527:web:88afc1349f9e2cdbabc3c2",
    measurementId: "G-H0CNZFS8J0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase; 