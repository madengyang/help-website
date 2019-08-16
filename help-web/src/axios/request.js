import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求过期时间
})

// request 请求前
service.interceptors.request.use(
  config => {
    // vux中是否有token
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = store.getters.token
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 请求后
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      //非200拦截所有message
     
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //messages 拦截错误信息  清除token重新登陆
      
      // store.dispatch('user/removeToken').then(() => {
      //   location.reload()
      // })
      }
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    //拦截 messages
    return Promise.reject(error)
  }
)

export default service
