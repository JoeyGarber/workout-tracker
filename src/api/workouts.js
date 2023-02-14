import apiUrl from '../apiConfig'
import axios from 'axios'

export const getWorkouts = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/workouts'
  })
}

export const createWorkout = (data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/workouts',
    // headers: {
    //   Authorization: `Bearer ${user.token}`
    // },
    data: {
      workout: {
        date: data.date
      }
    }
  })
}