'use client'

import { useState } from 'react'
import { Calendar, Settings } from 'lucide-react'
import { Button } from './components/ui/button'
import BookingForm from './components/booking/BookingForm' 
import AdminDashboard from './components/admin/AdminDashboard'
import FeatureCards from './components/booking/FeatureCards'
import styles from './styles/components.module.css'
export default function HomePage() {
  const [currentView, setCurrentView] = useState('booking')

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">BookingVista</h1>
                <p className="text-xs sm:text-sm text-gray-600">Sistema di Prenotazioni</p>
              </div>
            </div>
            <nav className="flex space-x-2">
              <Button 
                variant={currentView === 'booking' ? 'default' : 'outline'}
                onClick={() => setCurrentView('booking')}
                className="flex items-center space-x-2 px-3 sm:px-4"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Prenota</span>
              </Button>
              <Button 
                variant={currentView === 'admin' ? 'default' : 'outline'}
                onClick={() => setCurrentView('admin')}
                className="flex items-center space-x-2 px-3 sm:px-4"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`min-h-screen ${styles.gradientBackground}`}>
        <div className="container mx-auto px-4 py-8">
          {currentView === 'booking' ? (
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <section className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Prenota il Tuo Appuntamento
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Scegli data e orario che preferisci per il tuo appuntamento
                </p>
                
                <FeatureCards />
              </section>

              <BookingForm />
            </div>
          ) : (
            <AdminDashboard />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 BookingVista. Sistema di prenotazioni professionale.
          </p>
        </div>
      </footer>
    </>
  )
}
