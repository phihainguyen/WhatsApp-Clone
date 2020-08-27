import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBNJXByfMvKiT77Y4x5D7V8hSE9H-RTTUg",
    authDomain: "whatsapp-clone-a86b5.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-a86b5.firebaseio.com",
    projectId: "whatsapp-clone-a86b5",
    storageBucket: "whatsapp-clone-a86b5.appspot.com",
    messagingSenderId: "938614790269",
    appId: "1:938614790269:web:13499fdd7f957127aa7914",
    measurementId: "G-7BGYTHQDJM"
  };

const   fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;