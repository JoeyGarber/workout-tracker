import apiUrl from '../apiConfig'
import axios from 'axios'

export const testCall = (credentials) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/',
  })
}