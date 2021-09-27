import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import jadeRequest from './service'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

jadeRequest
  .request({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的拦截')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的拦截')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
