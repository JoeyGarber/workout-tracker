import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getWorkouts } from '../api/workouts'

export default function StartWorkout () {
  const navigate = useNavigate()

  function onClick(e) {
    e.preventDefault()

    getWorkouts()
    .then((workouts) => console.log(workouts))
    .catch((error) => console.log(error))
  }

  return (
    <div className='container'>
      <Button type='submit' onClick={e => onClick(e)}>Get Workouts</Button>
      <Button onClick={() => navigate('/buildWorkout')}>Build Workout</Button>
      <Button onClick={() => navigate('/createExercise')}>Create Exercise</Button>
    </div>
  )
}