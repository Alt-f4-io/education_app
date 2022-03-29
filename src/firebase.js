import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCxgYuX24PLJp6goxuLE-Tu7PuiQ-wwgr4",
    authDomain: "education-app-169bb.firebaseapp.com",
    databaseURL: "https://education-app-169bb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "education-app-169bb",
    storageBucket: "education-app-169bb.appspot.com",
    messagingSenderId: "393031329175",
    appId: "1:393031329175:web:16e070540633e5b6bad0d2"
})

export const auth = app.auth()
export default app
export const db = app.firestore()
