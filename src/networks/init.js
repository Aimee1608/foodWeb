import axios from 'axios'
// 设置全局请求前缀
axios.defaults.baseURL = 'https://www.qinlh.com/Food/public/index.php/port/food/'

axios.interceptors.response.use((response) => {
  // console.log('=====axios--response====', response)
  return response
}, (e) => {
  return Promise.reject(e)
})

axios.interceptors.request.use(async config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})
