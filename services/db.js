import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAcdkx2CoL30VZ8QkRTTMCDWdCL_4_UA0E",
    authDomain: "pokemon-95da5.firebaseapp.com",
    databaseURL: "https://pokemon-95da5.firebaseio.com",
    projectId: "pokemon-95da5",
    storageBucket: "pokemon-95da5.appspot.com",
    messagingSenderId: "153014828013"
  };
 let app = Firebase.initializeApp(config);
export const db = app.database();