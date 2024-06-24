"use client";
import { useEffect, useState } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseApp from "@/firebase";

const vapidKey =
  "BF0yKA-m41LZO9W8Kc5mf-Itmr3d1azqAmMpU_Cg2oXTPislKILZrfS0Uu6f2QgI2j4TK3g3veo5F56p-F2s4Hc";
const useFcmToken = () => {
  const [token, setToken] = useState("");
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState("");

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Request notification permission
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          if (permission === "granted") {
            const currentToken = await getToken(messaging, {
              vapidKey: vapidKey,
            });
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
            }
          }
        }
      } catch (error) {
        console.log("Error retrieving token:", error);
      }
    };

    retrieveToken();
  }, []);

  return { token, notificationPermissionStatus };
};

export default useFcmToken;
