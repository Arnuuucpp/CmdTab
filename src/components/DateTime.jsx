import React, { useEffect, useState } from 'react'

const formatMacStyleTime = (date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const meridiem = hours >= 12 ? 'pm' : 'am'
  const hour12 = hours % 12 || 12

  return `${weekday} ${month} ${day} ${hour12}:${minutes} ${meridiem}`
}

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <div className="date-time">{formatMacStyleTime(currentTime)}</div>
}

export default DateTime