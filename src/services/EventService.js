import axios from 'axios'

//                      => a single Axios instance for our entire app
const apiClient = axios.create({
  //BaseURL for all calls to use
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  //for authentication & configuration
  headers: {
    Accept: 'aaplication/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
