"use client";
import useFcmToken from "./utils/hooks/useFCMToken";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FcmTokenComp() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (notificationPermissionStatus === "granted") {
        const messaging = getMessaging(firebaseApp);
        const unsubscribe = onMessage(messaging, (payload) => {
          console.log("Foreground push notification received:", payload);
          dispatch({
            type: "addNotification",
          });
        });
        return () => {
          unsubscribe(); // Unsubscribe from the onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus]);

  return null; // This component is primarily for handling foreground notifications
}
