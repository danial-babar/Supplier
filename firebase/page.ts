import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfTOwhkLfd4CVmfiZAZqq1QqAa0XABhGw",
  authDomain: "mowarrdsa-dedda.firebaseapp.com",
  projectId: "mowarrdsa-dedda",
  storageBucket: "mowarrdsa-dedda.appspot.com",
  messagingSenderId: "1097327287347",
  appId: "1:1097327287347:web:9614d22efb120b000c1746",
  measurementId: "G-66MDDZSQRT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export const initFirebaseMessaging = () => {
  let fcmToken;
  if (typeof window !== "undefined") {
    // Only run in the browser
    const messaging = getMessaging(app);

    const requestPermissionAndGenerateToken = async () => {
      try {
        const permission = await Notification.requestPermission();
        console.log("Notification permission status:", permission);

        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey:
              "BF0yKA-m41LZO9W8Kc5mf-Itmr3d1azqAmMpU_Cg2oXTPislKILZrfS0Uu6f2QgI2j4TK3g3veo5F56p-F2s4Hc",
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

    fcmToken = requestPermissionAndGenerateToken();
  }
  return fcmToken;
};
