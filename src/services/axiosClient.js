import axios from 'axios'

const URL = 'http:localhost:3000/'

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
})

export default axiosInstance
