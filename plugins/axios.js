// export default ({ $axios, redirect }) => {
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })

//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
// }

export default function (app) {
  let axios = app.$axios; 
 // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    console.log('onRequest', config);
  })

  // 返回回调
  axios.onResponse(res => {
    console.log('onResponse', config);
  })

  // 错误回调
  axios.onError(error => {
    console.log('onError', config);
  })
}

