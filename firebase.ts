import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmljYoQxQ_Wwx9mRjVA-cyG-pWVxhc84A",
  authDomain: "mowarrdsa.firebaseapp.com",
  projectId: "mowarrdsa",
  storageBucket: "mowarrdsa.appspot.com",
  messagingSenderId: "642041299783",
  appId: "1:642041299783:web:bf79c21f474f5c626b4262",
//   measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
