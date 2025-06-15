import './globals.css'
import { Inter } from 'next/font/google'
import { ToastProvider } from '@/components/providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookingVista - Sistema di Prenotazioni',
  description: 'Sistema professionale per la gestione delle prenotazioni online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
