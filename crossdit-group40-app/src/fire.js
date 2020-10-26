import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBOZRLJs29p2B_NW495P0kcdmTH9sjfNPE",
    authDomain: "crossdit-team40.firebaseapp.com",
    databaseURL: "https://crossdit-team40.firebaseio.com",
    projectId: "crossdit-team40",
    storageBucket: "crossdit-team40.appspot.com",
    messagingSenderId: "487042873035",
    appId: "1:487042873035:web:07e1b613fb0e0b8f8e4d4e"
};
var fire = firebase.initializeApp(config);
export default fire;