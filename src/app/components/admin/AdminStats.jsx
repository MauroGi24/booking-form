import StatsCards from "./StatsCards"
import PopularTimeSlots from "./PopularTimeSlots"
import RecentBookings from "./RecentBookings"
import styles from '../../styles/admin.module.css'

const AdminStats = () => {
  // Mock statistics data
  const stats = {
    totalBookings: 247,
    todayBookings: 12,
    thisWeekBookings: 58,
    thisMonthBookings: 189,
    avgBookingsPerDay: 8.2,
    popularTimeSlots: [
      { time: "10:00", count: 45 },
      { time: "14:30", count: 38 },
      { time: "16:00", count: 35 },
    ],
    recentBookings: [
      { id: 1, name: "Mario Rossi", date: "2024-06-15", time: "10:00", status: "confirmed" },
      { id: 2, name: "Anna Bianchi", date: "2024-06-15", time: "14:30", status: "confirmed" },
      { id: 3, name: "Giuseppe Verdi", date: "2024-06-16", time: "09:00", status: "pending" },
      { id: 4, name: "Laura Neri", date: "2024-06-16", time: "11:00", status: "confirmed" },
    ]
  }

  return (
    <div className={`w-full space-y-6 ${styles.dashboardGrid}`}>
      <StatsCards stats={stats} />
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <PopularTimeSlots slots={stats.popularTimeSlots} />
        <RecentBookings bookings={stats.recentBookings} />
      </div>
    </div>
  )
}

export default AdminStats
