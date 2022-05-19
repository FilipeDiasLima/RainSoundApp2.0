import { ClockText } from './styles'
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(moment().format('HH:mm'))

  function updateTime() {
    setTime(moment().format('HH:mm'))
  }

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, [])

  return (
    <ClockText>
      {time}
    </ClockText>
  )
}