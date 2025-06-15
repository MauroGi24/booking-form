'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { generateTimeSlots } from "@/utils/dateUtils"
import styles from '@/styles/booking.module.css'

const TimeSlotSelector = ({ selectedDate, selectedTime, onTimeSelect }) => {
  const [availableSlots, setAvailableSlots] = useState([])

  useEffect(() => {
    const slots = generateTimeSlots(selectedDate)
    setAvailableSlots(slots)
  }, [selectedDate])

  if (!selectedDate) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">Seleziona prima una data</p>
      </div>
    )
  }

  if (availableSlots.length === 0) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">Nessun orario disponibile per questa data</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Clock className="h-4 w-4" />
        <span>Orari disponibili ({availableSlots.length} slot)</span>
      </div>
      
      <div className={`${styles.timeSlotGrid} max-h-64 overflow-y-auto`}>
        {availableSlots.map((slot) => (
          <Button
            key={slot}
            variant={selectedTime === slot ? "default" : "outline"}
            size="sm"
            onClick={() => onTimeSelect(slot)}
            className={`h-10 ${styles.timeSlot} ${
              selectedTime === slot ? styles.timeSlotSelected : ''
            }`}
          >
            {slot}
          </Button>
        ))}
      </div>
      
      {selectedTime && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <strong>Orario selezionato:</strong> {selectedTime}
          </p>
        </div>
      )}
    </div>
  )
}

export default TimeSlotSelector
