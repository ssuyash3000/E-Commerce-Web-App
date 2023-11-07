////////////////////////////////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/////////////////////////////////////////////////////////////////////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/////////////////////////////////////////////////////////////////////////////
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiFvm4M7yLViBCvjIYxHaJKNWcrEBA8iI",
  authDomain: "cart-page-48d06.firebaseapp.com",
  projectId: "cart-page-48d06",
  storageBucket: "cart-page-48d06.appspot.com",
  messagingSenderId: "198620950850",
  appId: "1:198620950850:web:0bcf9708b704ce93bb98db",
};
/////////////////////////////////////////////////////////////////////////////
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
