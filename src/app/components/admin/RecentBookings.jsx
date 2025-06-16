import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentBookings
