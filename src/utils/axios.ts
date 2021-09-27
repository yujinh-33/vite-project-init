import Axios from 'axios'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 5000
})

axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      console.error(`[Axios Error]`, error.response)
    } else {
      console.log(error)
    }
    return Promise.reject(error)
  }
)

export default axios
