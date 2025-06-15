import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Mail } from "lucide-react"
import styles from '@/styles/booking.module.css'

const FeatureCards = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendario Facile",
      description: "Seleziona facilmente data e orario disponibili",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Conferma Immediata",
      description: "Ricevi conferma via email istantaneamente",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Promemoria Email",
      description: "Promemoria automatici 24h e 3h prima",
      color: "text-purple-600"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {features.map((feature, index) => (
        <Card key={index} className={`text-center bg-white/95 ${styles.bookingCard}`}>
          <CardHeader>
            <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-2`} />
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeatureCards
