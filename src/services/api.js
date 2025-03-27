import axios from 'axios'

const API_BASE_URL = 'http://sister.zyuna646.tech/'

const api = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
   },
})

export default api
