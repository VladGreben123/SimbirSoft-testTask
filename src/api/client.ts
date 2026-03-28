import axios from 'axios'

const headers: Record<string, string> = {}

if (import.meta.env.VITE_API_TOKEN) {
  headers['X-Auth-Token'] = import.meta.env.VITE_API_TOKEN
}

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers,
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      return Promise.reject(
        new Error('Превышен лимит запросов. Подождите минуту и попробуйте снова.')
      )
    }
    if (error.response?.status === 403) {
      return Promise.reject(new Error('Данные недоступны на текущем тарифе API.'))
    }
    return Promise.reject(new Error('Не удалось загрузить данные. Попробуйте позже.'))
  }
)

export default client
