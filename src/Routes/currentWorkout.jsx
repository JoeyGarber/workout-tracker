import { testCall } from '../api/test'
import { useState } from 'react'

export default function CurrentWorkout () {
  const [data, setData] = useState(null)

  function onClick () {
    testCall()
    .then(response => setData(response.data))
  }

  return (
    <>
      <p>Hello!</p>
      <button onClick={onClick}>Click me to test the API setup</button>
      {data ? <p>{data}</p> : <p>Click button</p>}
    </>
  )
}