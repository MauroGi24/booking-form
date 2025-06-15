'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search, Calendar, Phone, Mail, Trash2, Eye } from "lucide-react"
import { toast } from "../../hooks/useToast"
import styles from '../../styles/admin.module.css'

const BookingsList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock bookings data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      nome: "Mario",
      cognome: "Rossi",
      email: "mario.rossi@email.com",
      telefono: "+39 123 456 7890",
      sitoWeb: "https://mariorossi.com",
      data: "2024-06-15",
      orario: "10:00",
      status: "confirmed",
      createdAt: "2024-06-10T14:30:00"
    },
    {
      id: 2,
      nome: "Anna",
      cognome: "Bianchi",
      email: "anna.bianchi@email.com",
      telefono: "+39 987 654 3210",
      data: "2024-06-15",
      orario: "14:30",
      status: "confirmed",
      createdAt: "2024-06-11T09:15:00"
    },
    {
      id: 3,
      nome: "Giuseppe",
      cognome: "Verdi",
      email: "giuseppe.verdi@email.com",
      telefono: "+39 555 123 4567",
      sitoWeb: "https://giuseppeverdi.it",
      data: "2024-06-16",
      orario: "09:00",
      status: "pending",
      createdAt: "2024-06-12T16:45:00"
    },
    {
      id: 4,
      nome: "Laura",
      cognome: "Neri",
      email: "laura.neri@email.com",
      telefono: "+39 444 888 9999",
      data: "2024-06-16",
      orario: "11:00",
      status: "confirmed",
      createdAt: "2024-06-13T11:20:00"
    },
    {
      id: 5,
      nome: "Franco",
      cognome: "Blu",
      email: "franco.blu@email.com",
      telefono: "+39 333 777 1111",
      data: "2024-06-17",
      orario: "15:30",
      status: "cancelled",
      createdAt: "2024-06-14T08:30:00"
    }
  ])

  // Filter bookings based on search term and status
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.cognome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.data.includes(searchTerm)
    
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id))
    toast({
      title: "Prenotazione Eliminata",
      description: "La prenotazione è stata rimossa con successo.",
    })
  }

  const getStatusBadge = (status) => {
    const baseClasses = `${styles.statusBadge}`
    
    switch (status) {
      case 'confirmed':
        return `${baseClasses} ${styles.statusConfirmed}`
      case 'pending':
        return `${baseClasses} ${styles.statusPending}`
      case 'cancelled':
        return `${baseClasses} ${styles.statusCancelled}`
      default:
        return baseClasses
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confermato'
      case 'pending':
        return 'In Attesa'
      case 'cancelled':
        return 'Annullato'
      default:
        return status
    }
  }

  const getBookingStats = () => {
    const total = bookings.length
    const confirmed = bookings.filter(b => b.status === 'confirmed').length
    const pending = bookings.filter(b => b.status === 'pending').length
    const cancelled = bookings.filter(b => b.status === 'cancelled').length
    
    return { total, confirmed, pending, cancelled }
  }

  const stats = getBookingStats()

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className={styles.statsCard}>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-gray-600">Totale</p>
          </CardContent>
        </Card>
        <Card className={styles.statsCard}>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
            <p className="text-sm text-gray-600">Confermati</p>
          </CardContent>
        </Card>
        <Card className={styles.statsCard}>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <p className="text-sm text-gray-600">In Attesa</p>
          </CardContent>
        </Card>
        <Card className={styles.statsCard}>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
            <p className="text-sm text-gray-600">Annullati</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Section */}
      <Card>
        <CardHeader>
          <CardTitle>Elenco Prenotazioni</CardTitle>
          <CardDescription>
            Gestisci tutte le prenotazioni del sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Cerca per nome, email o data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tutti gli stati</option>
              <option value="confirmed">Confermati</option>
              <option value="pending">In Attesa</option>
              <option value="cancelled">Annullati</option>
            </select>
          </div>

          {/* Results count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Mostrando {filteredBookings.length} di {bookings.length} prenotazioni
            </p>
          </div>

          {/* Mobile View - Cards */}
          <div className="space-y-4 md:hidden">
            {filteredBookings.map((booking) => (
              <Card key={booking.id} className={styles.mobileCard}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.nome} {booking.cognome}</h3>
                      {booking.sitoWeb && (
                        <a href={booking.sitoWeb} target="_blank" rel="noopener noreferrer" 
                           className="text-sm text-blue-600 underline">
                          {booking.sitoWeb}
                        </a>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteBooking(booking.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{booking.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{booking.telefono}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{booking.data} alle {booking.orario}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 pt-3 border-t">
                    <span className={getStatusBadge(booking.status)}>
                      {getStatusText(booking.status)}
                    </span>
                    <span className="text-xs text-gray-500">
                      Prenotato: {new Date(booking.createdAt).toLocaleDateString('it-IT')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Cliente</th>
                  <th className="text-left p-4">Contatti</th>
                  <th className="text-left p-4">Appuntamento</th>
                  <th className="text-left p-4">Stato</th>
                  <th className="text-left p-4">Prenotato il</th>
                  <th className="text-right p-4">Azioni</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className={`border-b ${styles.tableRow}`}>
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{booking.nome} {booking.cognome}</p>
                        {booking.sitoWeb && (
                          <p className="text-sm text-blue-600">
                            <a href={booking.sitoWeb} target="_blank" rel="noopener noreferrer">
                              {booking.sitoWeb}
                            </a>
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{booking.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{booking.telefono}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">{booking.data}</p>
                          <p className="text-sm text-gray-600">{booking.orario}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={getStatusBadge(booking.status)}>
                        {getStatusText(booking.status)}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">
                        {new Date(booking.createdAt).toLocaleDateString('it-IT')}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteBooking(booking.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nessuna prenotazione trovata</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingsList
