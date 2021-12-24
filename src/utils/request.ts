import appConfig from '@/config/app'
import { useStore } from 'vuex'
const { HEADER, HEADERPARAMS, TOKENNAME, HTTP_REQUEST_URL } = appConfig
/**
 * 发送请求
 */
function baseRequest(
  url: string,
  method: string,
  data: any,
  { noAuth = false, noVerify = false }: any,
  params: unknown
) {
  const store = useStore()
  const token = store.state.app.token
  const Url = HTTP_REQUEST_URL
  let header = JSON.parse(JSON.stringify(HEADER))
  if (params != undefined) {
    header = HEADERPARAMS
  }
  if (!noAuth) {
    if (!token) {
      return Promise.reject({
        msg: '未登录',
      })
    }
    if (token && token !== 'null') header[TOKENNAME] = 'Bearer ' + token
  }

  return new Promise((reslove, reject) => {
    uni.showLoading({
      title: '加载中',
      mask: true,
    })
    uni.request({
      url: Url + url,
      method: method || 'GET',
      header: header,
      data: data || {},
      success: (res) => {
        uni.hideLoading()
        res.data.token &&
          res.data.token !== 'null' &&
          store.commit('LOGIN', {
            token: res.data.token,
          })
        if (noVerify) {
          reslove(res)
        } else {
          reject(res.data.message || '系统错误')
        }
      },
      fail: (msg) => {
        uni.hideLoading()
        reject('请求失败')
      },
    })
  })
}

const request = {}

;['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
  request[method] = (api, data, opt, params) => baseRequest(api, method, data, opt || {}, params)
})

export default request
