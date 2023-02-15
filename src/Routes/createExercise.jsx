import { useState } from 'react'
import { createExercise } from '../api/exercises'

export default function CreateExercise() {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')

  function onClick(e) {
    e.preventDefault()
    createExercise({ name: name, note: note })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  return (
    <>
      <div>
        <h3>Exercise Name</h3>
        <input type='text' placeholder='Squat' onChange={e=>setName(e.target.value)}/>
        <h3>Exercise Notes</h3>
        <input type='text' placeholder='Belly out' onChange={e=>setNote(e.target.value)}/>
      </div>
      <button onClick={e => onClick(e)}>Create Exercise</button>
    </>
  )
}