import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { CheckCircle, Clock } from "lucide-react"
import styles from '../../styles/admin.module.css'

const RecentBookings = ({ bookings }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prenotazioni Recenti</CardTitle>
        <CardDescription>
          Ultimi appuntamenti prenotati
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className={`flex items-center justify-between p-3 border rounded-lg ${styles.tableRow}`}>
              <div>
                <p className="font-medium">{booking.name}</p>
                <p className="text-sm text-gray-600">
                  {booking.date} alle {booking.time}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {booking.status === 'confirmed' ? (
                  <div className={`flex items-center space-x-1 ${styles.statusBadge} ${styles.statusConfirmed}`}>
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">Confermato</span>
                  </div>
                ) : (
                  <div className={`flex items-center space-x-1 ${styles.statusBadge} ${styles.statusPending}`}>
                    <Clock className="h-4 w-4" />
                    <span className="text-xs">In Attesa</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentBookings
