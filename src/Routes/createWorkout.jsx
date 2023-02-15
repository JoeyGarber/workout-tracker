import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import Button from 'react-bootstrap/Button'
import { createWorkout } from '../api/workouts'

export default function CreateWorkout () {
  const [workoutDate, setWorkoutDate] = useState(new Date())
  const navigate = useNavigate()

  function onClick (e) {
    e.preventDefault()

    const workout = {
      date: workoutDate
    }

    createWorkout(workout)
    .then((response) => {navigate(`/buildWorkout/${response.data.workout._id}`)})
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