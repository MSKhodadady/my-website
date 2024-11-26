'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";



export function ClientLayout(P: {children: ReactNode}) {
  return <NextUIProvider>
    {P.children}
  </NextUIProvider>
}