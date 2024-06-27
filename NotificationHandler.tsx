import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NotificationHandler() {
  const dispatch = useDispatch();
  const [displayedNotifications, setDisplayedNotifications] = useState(new Set());

  useEffect(() => {
    // Listen for messages from service worker
    const handleMessage = (event) => {
      const { type, payload } = event.data;

      if (type === "addNotification") {
        const { title, body, id } = payload;

        if (!displayedNotifications.has(id)) {
          // Display toast notification
          toast.info(
            <div>
              <strong>{title}</strong>
              <br />
              {body}
            </div>,
            {
              autoClose: 5000,
              closeButton: true,
            }
          );

          // Add notification ID to the set
          setDisplayedNotifications((prev) => new Set(prev).add(id));
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Clear displayed notifications when the app comes to the foreground
    const handleFocus = () => {
      setDisplayedNotifications(new Set());
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("focus", handleFocus);
    };
  }, [displayedNotifications]);

  return null; // This component doesn't render anything visibly
}
