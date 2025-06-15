'use client'

import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { it } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { isDayAvailable } from "@/utils/dateUtils"

const DateSelector = ({ onDateSelect }) => {
  const { setValue, watch, formState: { errors } } = useFormContext()
  const selectedDate = watch("data")

  return (
    <div className="space-y-2">
      <Label>Seleziona Data *</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full pl-3 text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            {selectedDate ? (
              format(selectedDate, "d MMMM yyyy", { locale: it })
            ) : (
              <span>Scegli una data</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setValue("data", date)
              onDateSelect(date)
            }}
            disabled={(date) => !isDayAvailable(date)}
            initialFocus
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
      {errors.data && (
        <p className="text-sm text-red-600">{errors.data.message}</p>
      )}
    </div>
  )
}

export default DateSelector
