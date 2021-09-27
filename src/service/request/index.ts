import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { JadeRequestConfig, JadeRequestInterceptors } from './type'

class JadeRequest {
  instance: AxiosInstance

  interceptors?: JadeRequestInterceptors

  constructor(config: JadeRequestConfig) {
    this.instance = axios.create(config) // create函数可以创建出一个axios实例

    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (initConfig) => {
        console.log('所有请求成功的拦截')
        return initConfig
      },
      (error) => {
        console.log('所有请求失败的拦截')
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有响应成功的拦截')
        return res.data
      },
      (error) => {
        console.log('所有响应失败的拦截')
        return error
      }
    )
  }

  request<T>(config: JadeRequestConfig<T>): Promise<T> {
    return new Promise((resolve) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((err) => {
          return err
        })
    })
  }

  get<T>(config: JadeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: JadeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: JadeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: JadeRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default JadeRequest
