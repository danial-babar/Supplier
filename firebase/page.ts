import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmljYoQxQ_Wwx9mRjVA-cyG-pWVxhc84A",
  authDomain: "mowarrdsa.firebaseapp.com",
  projectId: "mowarrdsa",
  storageBucket: "mowarrdsa.appspot.com",
  messagingSenderId: "642041299783",
  appId: "1:642041299783:web:bf79c21f474f5c626b4262"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export const initFirebaseMessaging = () => {
  if (typeof window !== "undefined") {
    // Only run in the browser
    const messaging = getMessaging(app);

    const requestPermissionAndGenerateToken = async () => {
      try {
        const permission = await Notification.requestPermission();
        console.log("Notification permission status:", permission);

        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: "BNOfrmjN_MYm_h0AzIMivNfUhKnD1KFfo8HHa1dDi3h1DbUmKhMCkzEa95N-cl_iu7c-_yz49xTcEORs7zUDh4k",
          });
          console.log("FCM Token:", token);
          return token;
        } else {
          console.warn("Notification permission denied");
        }
      } catch (error) {
        console.error("Error generating FCM token:", error);
      }
    };

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });

    requestPermissionAndGenerateToken();
  }
};
