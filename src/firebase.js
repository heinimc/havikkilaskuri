
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyC3eoYogfrcCG1XynlVxYArVlYF7ujvc1Q",
    authDomain: "havikkilaskuri.firebaseapp.com",
    databaseURL: "https://havikkilaskuri.firebaseio.com",
    projectId: "havikkilaskuri",
    storageBucket: "havikkilaskuri.appspot.com",
    messagingSenderId: "869487709388",
    appId: "1:869487709388:web:6883199557b4e1e3f64669",
    measurementId: "G-EKLFYVF6PE"
  };

  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;