import axios from 'axios'
import { responseInterceptor } from './interceptors'

let config = {
    baseURL: 'http://localhost:5000',
    timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
}

const api = axios.create(config)

api.interceptors.response.use(responseInterceptor)

const setBearerToken = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { api, setBearerToken }