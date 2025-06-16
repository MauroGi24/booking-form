import React from "react"
import DatePicker from "react-datepicker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { cn } from "../../lib/utils"

// Custom header per il calendario
const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className="flex justify-between items-center px-2 py-2">
    <button
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
      className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
      type="button"
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
    <span className="text-sm font-medium">
      {date.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
    </span>
    <button
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
      type="button"
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  </div>
)

function Calendar({ 
  selected, 
  onSelect, 
  disabled, 
  className,
  mode = "single",
  ...props 
}) {
  return (
    <div className={cn("calendar-wrapper", className)}>
      <DatePicker
        selected={selected}
        onChange={(date) => onSelect && onSelect(date)}
        locale={it}
        inline
        showWeekNumbers={false}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 2)}
        renderCustomHeader={CustomHeader}
        filterDate={(date) => {
          if (typeof disabled === 'function') {
            return !disabled(date)
          }
          return true
        }}
        {...props}
      />
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }