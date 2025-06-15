'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "@/hooks/useToast"
import { Clock, Calendar as CalendarIcon, Mail, Globe, Save } from "lucide-react"

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    // Time slot settings
    slotDuration: 30,
    startTime: "09:00",
    endTime: "18:00",
    maxBookingsPerDay: 20,
    
    // Availability settings
    enableWeekends: false,
    enableHolidays: false,
    vacationDates: [],
    
    // Email settings
    smtpHost: "smtp.gmail.com",
    smtpPort: 587,
    smtpUser: "your-email@gmail.com",
    smtpPassword: "",
    emailTemplate: `Gentile {nome} {cognome},

La confermiamo che il Suo appuntamento è stato prenotato con successo.

Dettagli appuntamento:
📅 Data: {data}
🕐 Orario: {orario}
📧 Email: {email}
📞 Telefono: {telefono}

La ringraziamo per la fiducia.

Cordiali saluti,
Il Team di BookingVista`,
    
    // Business settings
    businessName: "BookingVista",
    businessEmail: "info@bookingvista.com",
    businessPhone: "+39 123 456 7890",
    businessAddress: "Via Roma 123, 00100 Roma",
  })

  const [vacationStartDate, setVacationStartDate] = useState()
  const [vacationEndDate, setVacationEndDate] = useState()

  const handleSaveSettings = () => {
    // Simulate saving settings
    console.log("Saving settings:", settings)
    toast({
      title: "Impostazioni Salvate ✅",
      description: "Le impostazioni sono state aggiornate con successo.",
    })
  }

  const addVacationPeriod = () => {
    if (vacationStartDate && vacationEndDate) {
      const dates = []
      const currentDate = new Date(vacationStartDate)
      
      while (currentDate <= vacationEndDate) {
        dates.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
      }
      
      setSettings(prev => ({
        ...prev,
        vacationDates: [...prev.vacationDates, ...dates]
      }))
      
      setVacationStartDate(undefined)
      setVacationEndDate(undefined)
      
      toast({
        title: "Periodo di Vacanza Aggiunto",
        description: `Aggiunti ${dates.length} giorni di vacanza.`,
      })
    }
  }

  const removeVacationDate = (dateToRemove) => {
    setSettings(prev => ({
      ...prev,
      vacationDates: prev.vacationDates.filter(date => 
        date.toDateString() !== dateToRemove.toDateString()
      )
    }))
  }

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Time Slot Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Impostazioni Orari</span>
            </CardTitle>
            <CardDescription>
              Configura la durata degli slot e gli orari di lavoro
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="slotDuration">Durata Slot (minuti)</Label>
              <select
                id="slotDuration"
                value={settings.slotDuration}
                onChange={(e) => setSettings(prev => ({ ...prev, slotDuration: Number(e.target.value) }))}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={15}>15 minuti</option>
                <option value={30}>30 minuti</option>
                <option value={45}>45 minuti</option>
                <option value={60}>60 minuti</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startTime">Orario Inizio</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={settings.startTime}
                  onChange={(e) => setSettings(prev => ({ ...prev, startTime: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="endTime">Orario Fine</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={settings.endTime}
                  onChange={(e) => setSettings(prev => ({ ...prev, endTime: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="maxBookings">Max Prenotazioni/Giorno</Label>
              <Input
                id="maxBookings"
                type="number"
                min="1"
                max="50"
                value={settings.maxBookingsPerDay}
                onChange={(e) => setSettings(prev => ({ ...prev, maxBookingsPerDay: Number(e.target.value) }))}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="weekends">Abilita Weekend</Label>
                <input
                  type="checkbox"
                  id="weekends"
                  checked={settings.enableWeekends}
                  onChange={(e) => setSettings(prev => ({ ...prev, enableWeekends: e.target.checked }))}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="holidays">Abilita Festivi</Label>
                <input
                  type="checkbox"
                  id="holidays"
                  checked={settings.enableHolidays}
                  onChange={(e) => setSettings(prev => ({ ...prev, enableHolidays: e.target.checked }))}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vacation Period Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span>Periodi di Vacanza</span>
            </CardTitle>
            <CardDescription>
              Gestisci i giorni in cui non accettare prenotazioni
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Data Inizio</Label>
                <Calendar
                  mode="single"
                  selected={vacationStartDate}
                  onSelect={setVacationStartDate}
                  className="border rounded-md"
                />
              </div>
              <div>
                <Label>Data Fine</Label>
                <Calendar
                  mode="single"
                  selected={vacationEndDate}
                  onSelect={setVacationEndDate}
                  className="border rounded-md"
                />
              </div>
            </div>

            <Button 
              onClick={addVacationPeriod}
              disabled={!vacationStartDate || !vacationEndDate}
              className="w-full"
            >
              Aggiungi Periodo Vacanza
            </Button>

           {/* Current vacation dates */}
           {settings.vacationDates.length > 0 && (
             <div>
               <Label>Giorni di Vacanza Attuali:</Label>
               <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                 {settings.vacationDates.map((date, index) => (
                   <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                     <span className="text-sm">{date.toLocaleDateString('it-IT')}</span>
                     <Button
                       size="sm"
                       variant="destructive"
                       onClick={() => removeVacationDate(date)}
                     >
                       Rimuovi
                     </Button>
                   </div>
                 ))}
               </div>
             </div>
           )}
         </CardContent>
       </Card>
     </div>

     {/* Email Settings */}
     <Card>
       <CardHeader>
         <CardTitle className="flex items-center space-x-2">
           <Mail className="h-5 w-5" />
           <span>Impostazioni Email</span>
         </CardTitle>
         <CardDescription>
           Configura SMTP e template email per le conferme
         </CardDescription>
       </CardHeader>
       <CardContent className="space-y-4">
         <div className="grid md:grid-cols-2 gap-4">
           <div>
             <Label htmlFor="smtpHost">SMTP Host</Label>
             <Input
               id="smtpHost"
               value={settings.smtpHost}
               onChange={(e) => setSettings(prev => ({ ...prev, smtpHost: e.target.value }))}
               placeholder="smtp.gmail.com"
             />
           </div>
           <div>
             <Label htmlFor="smtpPort">SMTP Port</Label>
             <Input
               id="smtpPort"
               type="number"
               value={settings.smtpPort}
               onChange={(e) => setSettings(prev => ({ ...prev, smtpPort: Number(e.target.value) }))}
             />
           </div>
         </div>

         <div className="grid md:grid-cols-2 gap-4">
           <div>
             <Label htmlFor="smtpUser">SMTP Username</Label>
             <Input
               id="smtpUser"
               value={settings.smtpUser}
               onChange={(e) => setSettings(prev => ({ ...prev, smtpUser: e.target.value }))}
               placeholder="your-email@gmail.com"
             />
           </div>
           <div>
             <Label htmlFor="smtpPassword">SMTP Password</Label>
             <Input
               id="smtpPassword"
               type="password"
               value={settings.smtpPassword}
               onChange={(e) => setSettings(prev => ({ ...prev, smtpPassword: e.target.value }))}
               placeholder="App Password"
             />
           </div>
         </div>

         <div>
           <Label htmlFor="emailTemplate">Template Email (Italiano)</Label>
           <Textarea
             id="emailTemplate"
             rows={8}
             value={settings.emailTemplate}
             onChange={(e) => setSettings(prev => ({ ...prev, emailTemplate: e.target.value }))}
             className="mt-1"
           />
           <p className="text-sm text-gray-600 mt-2">
             Variabili disponibili: {"{nome}"}, {"{cognome}"}, {"{email}"}, {"{telefono}"}, {"{data}"}, {"{orario}"}
           </p>
         </div>
       </CardContent>
     </Card>

     {/* Business Settings */}
     <Card>
       <CardHeader>
         <CardTitle className="flex items-center space-x-2">
           <Globe className="h-5 w-5" />
           <span>Informazioni Azienda</span>
         </CardTitle>
         <CardDescription>
           Configura i dettagli della tua attività
         </CardDescription>
       </CardHeader>
       <CardContent className="space-y-4">
         <div className="grid md:grid-cols-2 gap-4">
           <div>
             <Label htmlFor="businessName">Nome Azienda</Label>
             <Input
               id="businessName"
               value={settings.businessName}
               onChange={(e) => setSettings(prev => ({ ...prev, businessName: e.target.value }))}
             />
           </div>
           <div>
             <Label htmlFor="businessEmail">Email Azienda</Label>
             <Input
               id="businessEmail"
               type="email"
               value={settings.businessEmail}
               onChange={(e) => setSettings(prev => ({ ...prev, businessEmail: e.target.value }))}
             />
           </div>
         </div>

         <div className="grid md:grid-cols-2 gap-4">
           <div>
             <Label htmlFor="businessPhone">Telefono Azienda</Label>
             <Input
               id="businessPhone"
               value={settings.businessPhone}
               onChange={(e) => setSettings(prev => ({ ...prev, businessPhone: e.target.value }))}
             />
           </div>
           <div>
             <Label htmlFor="businessAddress">Indirizzo Azienda</Label>
             <Input
               id="businessAddress"
               value={settings.businessAddress}
               onChange={(e) => setSettings(prev => ({ ...prev, businessAddress: e.target.value }))}
             />
           </div>
         </div>
       </CardContent>
     </Card>

     {/* Save Button */}
     <div className="flex justify-end">
       <Button onClick={handleSaveSettings} size="lg" className="flex items-center space-x-2">
         <Save className="h-4 w-4" />
         <span>Salva Tutte le Impostazioni</span>
       </Button>
     </div>
   </div>
 )
}

export default AdminSettings
