"use client";
import useFcmToken from "./utils/hooks/useFCMToken";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function FcmTokenComp() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (notificationPermissionStatus === "granted") {
        const messaging = getMessaging(firebaseApp);

        const unsubscribe = onMessage(messaging, (payload) => {
          console.log('forground message',payload);
          // Display toast notification when message received
          const { title, body } = payload.data;

          toast.info(
            <div className="toast-notification">
              {/* {icon && (
                <img
                  src={icon}
                  alt="Notification Icon"
                  className="toast-icon"
                />
              )} */}
              <div className="toast-content">
                <strong className="toast-title">{title}</strong>
                <br />
                <span className="toast-body">{body}</span>
              </div>
            </div>,
            {
              autoClose: 5000,
              closeButton: true,
              className: 'toast-container', // Apply custom class to the toast container
            }
          );

          // Dispatch Redux action or perform any other logic
          dispatch({
            type: "addNotification",
          });
        });

        return () => {
          unsubscribe(); // Unsubscribe from onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus, dispatch]);

  return null; // This component is primarily for handling foreground notifications
}
