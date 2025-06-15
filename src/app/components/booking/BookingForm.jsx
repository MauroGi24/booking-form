'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { useBookingForm } from "@/hooks/useBookingForm"
import PersonalInfoFields from "./PersonalInfoFields"
import DateSelector from "./DateSelector"
import TimeSlotSelector from "./TimeSlotSelector"
import BookingSuccess from "./BookingSuccess"
import { FormProvider } from "react-hook-form"
import styles from '@/styles/booking.module.css'

const BookingForm = () => {
  const {
    form,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isSubmitting,
    isSubmitted,
    onSubmit,
    resetForm,
  } = useBookingForm()

  if (isSubmitted) {
    return (
      <BookingSuccess
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        email={form.getValues("email")}
        onNewBooking={resetForm}
      />
    )
  }

  return (
    <Card className={`max-w-4xl mx-auto bg-white/95 ${styles.bookingCard}`}>
      <CardHeader>
        <CardTitle className="text-2xl">Modulo di Prenotazione</CardTitle>
        <CardDescription>
          Compila tutti i campi per prenotare il tuo appuntamento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <PersonalInfoFields />

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <DateSelector
                  onDateSelect={(date) => {
                    setSelectedDate(date)
                    setSelectedTime("")
                    form.setValue("orario", "")
                  }}
                />
              </div>

              <div className="space-y-4">
                <TimeSlotSelector
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onTimeSelect={(time) => {
                    form.setValue("orario", time)
                    setSelectedTime(time)
                  }}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Clock className={`mr-2 h-4 w-4 ${styles.loadingSpinner}`} />
                  Elaborazione...
                </>
              ) : (
                "Prenota Appuntamento"
              )}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  )
}

export default BookingForm
