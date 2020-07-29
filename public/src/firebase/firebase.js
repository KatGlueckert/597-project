  import * as firebase from 'firebase';
  
  var firebaseConfig = {
    apiKey: "AIzaSyAF7DNSr9awpPE9ydvLZZcDylbH3nXowsI",
    authDomain: "team-build-test.firebaseapp.com",
    databaseURL: "https://team-build-test.firebaseio.com",
    projectId: "team-build-test",
    storageBucket: "team-build-test.appspot.com",
    messagingSenderId: "12761741308",
    appId: "1:12761741308:web:72bd891236fdca8b842479"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };