'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Settings, Users, BarChart3 } from "lucide-react"
import BookingsList from "./BookingsList"
import AdminSettings from "./AdminSettings"
import AdminStats from "./AdminStats"
import styles from '@/styles/admin.module.css'

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <div className="flex flex-col space-y-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pannello Amministratore</h2>
          <p className="text-sm md:text-base text-gray-600">Gestisci prenotazioni e impostazioni</p>
        </div>
      </div>

      <Tabs defaultValue="stats" className="w-full space-y-4 md:space-y-6">
        <div className="w-full overflow-x-auto">
          <TabsList className="grid w-full min-w-max grid-cols-4 md:w-auto md:min-w-0">
            <TabsTrigger value="stats" className="flex items-center justify-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4">
              <BarChart3 className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Statistiche</span>
              <span className="sm:hidden">Stats</span>
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center justify-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Prenotazioni</span>
              <span className="sm:hidden">Booking</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center justify-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4">
              <Settings className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Impostazioni</span>
              <span className="sm:hidden">Settings</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center justify-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4">
              <Users className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Utenti</span>
              <span className="sm:hidden">Users</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="stats" className="w-full">
          <AdminStats />
        </TabsContent>

        <TabsContent value="bookings" className="w-full">
          <BookingsList />
        </TabsContent>

        <TabsContent value="settings" className="w-full">
          <AdminSettings />
        </TabsContent>

        <TabsContent value="users" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Gestione Utenti</CardTitle>
              <CardDescription>
                Visualizza e gestisci gli utenti registrati nel sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">
                Funzionalità di gestione utenti in sviluppo...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
