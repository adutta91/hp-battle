// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const initFirebase = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const clientCredentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "hp-battle-362c6.firebaseapp.com",
    projectId: "hp-battle-362c6",
    storageBucket: "hp-battle-362c6.appspot.com",
    messagingSenderId: "842262420852",
    appId: "1:842262420852:web:64bcaed6e4c2a86ddaa021",
    measurementId: "G-J6ZXLLTDGF"
  };

  // Initialize Firebase
  const app = initializeApp(clientCredentials);
  const analytics = getAnalytics(app);
  const database = getFirestore(app)
  const auth = getAuth(app);

  return {
    app, analytics, database, auth
  }
}

export default initFirebase;