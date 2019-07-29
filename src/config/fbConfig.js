import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCCsVBOxWLeuV8zFYkyjKTcbfnkPciJIXc",
    authDomain: "fir-dashboard-a43a8.firebaseapp.com",
    databaseURL: "https://fir-dashboard-a43a8.firebaseio.com",
    projectId: "fir-dashboard-a43a8",
    storageBucket: "",
    messagingSenderId: "197456289485",
    appId: "1:197456289485:web:cf6dcdd405acfbb1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const settings = {timestampsInSnapshots: true};
  if(!firebase){
    firebase.firestore().settings(settings);
  }
  export default firebase;