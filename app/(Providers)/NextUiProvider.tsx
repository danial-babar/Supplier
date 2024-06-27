"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { persistor, store } from "@/redux/Store";
import { Provider as ReduxProvder } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FcmTokenComp from "../../firebaseForeground";
import { ToastContainer } from "react-toastify";
import NotificationHandler from "@/NotificationHandler";
interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvder store={store}>
      <NextUIProvider>
        <FcmTokenComp />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NotificationHandler/>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </NextUIProvider>
    </ReduxProvder>
  );
}
