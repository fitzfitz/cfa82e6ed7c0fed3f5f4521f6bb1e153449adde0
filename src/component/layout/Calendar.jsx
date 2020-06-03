import React from 'react'
import moment from 'moment'
import { AppBar, Toolbar } from '@material-ui/core'

export default function Calendar() {
  const WEEKS = () => {
    const days = []
    const dateStart = moment()
    const dateEnd = moment().add(13, 'days')
    while (dateEnd.diff(dateStart, 'days') >= 0) {
      days.push(dateStart.toDate())
      dateStart.add(1, 'days')
    }
    return days
  }
  return (
    <div className='calendar-wrap'>
      {WEEKS().map((e, i) => (
        <div key={i} className={`calendar-item ${moment(e).day() === 6 || moment(e).day() === 0 ? 'isWeekend' : ''}`}>
          <div>{moment(e).format('ddd')}</div>
          <div>{moment(e).format('DD')}</div>
        </div>
      ))}
    </div>
  )
}
