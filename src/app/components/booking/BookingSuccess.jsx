import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import styles from '@/styles/booking.module.css'

const BookingSuccess = ({ selectedDate, selectedTime, email, onNewBooking }) => {
  return (
    <Card className={`max-w-2xl mx-auto text-center bg-white/95 ${styles.successAnimation}`}>
      <CardHeader>
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <CardTitle className="text-2xl text-green-600">Prenotazione Confermata!</CardTitle>
        <CardDescription className="text-lg">
          Riceverai una email di conferma a breve con tutti i dettagli.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">Dettagli Appuntamento:</h3>
          <p className="text-green-700">
            <strong>Data:</strong> {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: it })}
          </p>
          <p className="text-green-700">
            <strong>Orario:</strong> {selectedTime}
          </p>
          <p className="text-green-700">
            <strong>Email:</strong> {email}
          </p>
        </div>
        <Button onClick={onNewBooking} variant="outline">
          Prenota Nuovo Appuntamento
        </Button>
      </CardContent>
    </Card>
  )
}

export default BookingSuccess
