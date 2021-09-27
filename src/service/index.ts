import JadeRequest from './request'
import { baseUrl } from './request/config'

const jadeRequest = new JadeRequest({
  baseURL: baseUrl,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('实例请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('实例请求失败的拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('实例响应成功的拦截')
      return res.data
    },
    responseInterceptorCatch: (error) => {
      console.log('实例响应失败的拦截')
      return error
    }
  }
})

export default jadeRequest
