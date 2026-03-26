import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'X-Auth-Token': import.meta.env.VITE_API_TOKEN,
  },
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
