'use client'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxStore } from "@/redux/Store";
import { Provider as ReduxProvder } from "react-redux"
interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvder store={ReduxStore}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ReduxProvder>
  )
}
