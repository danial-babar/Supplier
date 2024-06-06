import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

firebaseApp.initializeApp({
  apiKey: "AIzaSyDZMaWACaH-ADDeGDqzTml6amqnJPIbOrg",
  authDomain: "mowarrd-8e7c0.firebaseapp.com",
  projectId: "mowarrd-8e7c0",
  storageBucket: "mowarrd-8e7c0.appspot.com",
  messagingSenderId: "45376886908",
  appId: "1:45376886908:web:2a7636dca32165ba9991f9",
  measurementId: "G-G0G3E93FSK",
});

const messaging = firebaseApp.messaging();

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
