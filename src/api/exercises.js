import apiUrl from '../apiConfig'
import axios from 'axios'

export const getExercises = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/exercises'
  })
}

export const createExercise = (exercise) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/exercises',
    data: {
      exercise: {
        name: exercise.name,
        note: exercise.note
      }
    }
  })
}