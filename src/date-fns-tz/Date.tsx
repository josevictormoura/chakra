import React from 'react'
import { format, toZonedTime } from 'date-fns-tz'

const Date = () => {
    const [eventDate, setEventDate] = React.useState<string>()
    const date = "2025-07-16T20:30:00.010Z"


    React.useEffect(() => {
        const data = toZonedTime(date, "America/Sao_Paulo")
        setEventDate(format(data, "dd/MM/yyyy HH:mm"))
    }, [])
 
  return (
    <div>
      {eventDate && <>{eventDate}</>}
    </div>
  )
}

export default Date
