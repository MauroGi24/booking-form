import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const PopularTimeSlots = ({ slots }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orari Più Richiesti</CardTitle>
        <CardDescription>
          Gli slot temporali con più prenotazioni
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {slots.map((slot, index) => (
            <div key={slot.time} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  #{index + 1}
                </div>
                <span className="font-medium">{slot.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 rounded-full h-2 w-24">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(slot.count / 50) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{slot.count}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PopularTimeSlots
