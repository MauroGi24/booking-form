'use client'

import { Toaster } from "@/components/ui/toast"

export function ToastProvider({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
