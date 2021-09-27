import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface JadeRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface JadeRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: JadeRequestInterceptors<T>
}
