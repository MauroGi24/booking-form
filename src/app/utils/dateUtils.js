export const isDayAvailable = (date) => {
  const today = new Date()
  const dayOfWeek = date.getDay()
  
  // Disable past dates, weekends, and some mock vacation days
  if (date < today) return false
  if (dayOfWeek === 0 || dayOfWeek === 6) return false // No weekends
  
  // Mock vacation period (Christmas week)
  const isChristmasWeek = date.getMonth() === 11 && date.getDate() >= 24 && date.getDate() <= 31
  if (isChristmasWeek) return false
  
  return true
}

export const generateTimeSlots = (selectedDate) => {
  if (!selectedDate) return []

  // Generate time slots (9 AM to 6 PM, 30-minute intervals)
  const slots = []
  for (let hour = 9; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      slots.push(timeString)
    }
  }

  // Mock some booked slots for demonstration
  const today = new Date()
  const isToday = selectedDate.toDateString() === today.toDateString()
  const currentHour = today.getHours()
  
  const bookedSlots = ['10:00', '14:30', '16:00'] // Mock booked slots
  
  let filteredSlots = slots.filter(slot => {
    // Remove booked slots
    if (bookedSlots.includes(slot)) return false
    
    // If it's today, remove past time slots
    if (isToday) {
      const [slotHour] = slot.split(':').map(Number)
      if (slotHour <= currentHour) return false
    }
    
    return true
  })

  return filteredSlots
}
