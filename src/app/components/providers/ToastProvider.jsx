'use client'

import { Toaster } from "../ui/toast"

export function ToastProvider({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
