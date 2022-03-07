import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAioIRbzIJ91Rta8x0tIpHgwQQ1WRF64J8",
  authDomain: "education-app-44105.firebaseapp.com",
  projectId: "education-app-44105",
  storageBucket: "education-app-44105.appspot.com",
  messagingSenderId: "33898066107",
  appId: "1:33898066107:web:5bf388a3db18628366399e"
})

export const auth = app.auth()
export default app