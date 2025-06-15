import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '../hooks/useToast'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { bookingSchema } from '../utils/validation'

export const useBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState()
  const [selectedTime, setSelectedTime] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      telefono: "",
      email: "",
      sitoWeb: "",
      orario: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Booking submitted:", data)
    
    toast({
      title: "Prenotazione Confermata! ✅",
      description: `Appuntamento prenotato per il ${format(data.data, "d MMMM yyyy", { locale: it })} alle ${data.orario}`,
    })
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    form.reset()
    setSelectedDate(undefined)
    setSelectedTime("")
  }

  return {
    form,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isSubmitting,
    isSubmitted,
    onSubmit,
    resetForm,
  }
}