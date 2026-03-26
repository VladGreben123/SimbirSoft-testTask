import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'X-Auth-Token': import.meta.env.VITE_API_TOKEN,
  },
})

export default client
