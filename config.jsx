import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYJlWPhWvxYSAXq4HYAyxXhjHJra6S4Kw",
    authDomain: "chat-app-4f0ce.firebaseapp.com",
    projectId: "chat-app-4f0ce",
    storageBucket: "chat-app-4f0ce.appspot.com",
    messagingSenderId: "968048314284",
    appId: "1:968048314284:web:3e2047721bd8e05b345c09"
}

firebase.initializeApp(firebaseConfig);

export default firebase;
