import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfTOwhkLfd4CVmfiZAZqq1QqAa0XABhGw",
  authDomain: "mowarrdsa-dedda.firebaseapp.com",
  projectId: "mowarrdsa-dedda",
  storageBucket: "mowarrdsa-dedda.appspot.com",
  messagingSenderId: "1097327287347",
  appId: "1:1097327287347:web:9614d22efb120b000c1746",
  measurementId: "G-66MDDZSQRT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
