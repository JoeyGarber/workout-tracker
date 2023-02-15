
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getExercises } from '../api/exercises'
import { getWorkout } from '../api/workouts'

export default function BuildWorkout () {
  const { id } = useParams()
  const [workout, setWorkout] = useState({})
  const [exercises, setExercises] = useState({})

  function onClick() {
    getExercises()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getWorkout(id)
    .then((response) => {
      console.log(response.data.workout)
      setWorkout(response.data.workout)
    })
  }, [])

  return (
    <div>
      <p>{workout._id}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

// I have just created a new workout, or selected an existing one.
// The id of that workout is in the params.
// I am also accessing those params, and sending them along with my API calls,
// Because the API handles dynamic routing as well.
//
// I want to dynamically render exercises that exist in this workout. Users can edit them. 
// I am getting hung up on self-submitting forms. Submit buttons for now.
// 
// I also want a button to add a new exercise.
// That will just generate a form that pushes a new exercise into the workout.
// It'll be one exercise at a time. But maybe it updates every rep added
