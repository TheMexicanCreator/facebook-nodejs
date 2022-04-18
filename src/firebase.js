import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQfe5_xl_iZecpVu6G6T5mQjQYxlSII2Y",
    authDomain: "facebook-nodejs-e9c5c.firebaseapp.com",
    projectId: "facebook-nodejs-e9c5c",
    storageBucket: "facebook-nodejs-e9c5c.appspot.com",
    messagingSenderId: "395475664070",
    appId: "1:395475664070:web:53bd50cd78ef2911f96bc7",
    measurementId: "G-DNGD0T9H0L"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();  
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;