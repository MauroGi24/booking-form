import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, TrendingUp } from "lucide-react"
import styles from '@/styles/admin.module.css'

const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: "Prenotazioni Totali",
      value: stats.totalBookings,
      change: "+12% rispetto al mese scorso",
      icon: Calendar
    },
    {
      title: "Oggi",
      value: stats.todayBookings,
      change: "+2 rispetto a ieri",
      icon: Clock
    },
    {
      title: "Questa Settimana",
      value: stats.thisWeekBookings,
      change: "+8% rispetto alla settimana scorsa",
      icon: TrendingUp
    },
    {
      title: "Media Giornaliera",
      value: stats.avgBookingsPerDay,
      change: "appuntamenti al giorno",
      icon: Users
    }
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className={`min-w-0 ${styles.statsCard}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 truncate pr-2">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{card.value}</div>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default StatsCards
