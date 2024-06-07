import firebase, { initializeApp } from "firebase/app";
import "firebase/messaging";
import { getMessaging, getToken } from "firebase/messaging";
// import { getMessaging } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDZMaWACaH-ADDeGDqzTml6amqnJPIbOrg",
  authDomain: "mowarrd-8e7c0.firebaseapp.com",
  projectId: "mowarrd-8e7c0",
  storageBucket: "mowarrd-8e7c0.appspot.com",
  messagingSenderId: "45376886908",
  appId: "1:45376886908:web:2a7636dca32165ba9991f9",
  measurementId: "G-G0G3E93FSK",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  const permissions = await Notification.requestPermission();
  console.log("Generating token", permissions);
  if (permissions == "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BK8jFmI59XgwjbVrJh85G_rCv4b9qRpsO_FqwbZu6Z4bNsEP9_u3WYBFV4-X5q0EtyqyOIbg4O5PaHgECaEM7CE",
    });
    console.log("token", token);
  }
};
