import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-date-picker'
import Button from 'react-bootstrap/Button'
import { createWorkout } from '../api/workouts'

export default function BuildWorkout () {
  const [workoutDate, setWorkoutDate] = useState(new Date())

  function onClick (e) {
    e.preventDefault()

    const workout = {
      date: workoutDate
    }

    createWorkout(workout)
    .then((workout) => console.log(workout))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <Button onClick={e => onClick(e)}>Create workout</Button>
      {/* the value prop shows what the currently selected date is */}
      <DatePicker onChange={setWorkoutDate} value={workoutDate}/>
    </div>
  )
}