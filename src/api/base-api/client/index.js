import axios from 'axios'
import qs from 'qs'
import R from 'ramda'

const HTTP_NO_CONTENT = 204

export const baseURL = 'http://localhost:8000/api/v1/'

const transformOptions = (options, state) => Object.assign({}, {
  withCredentials: false,
  paramsSerializer: params => qs.stringify(params, { encode: false }),
  headers: {
    Authorization: `Bearer ${state.auth.access_token}`
  },
  baseURL
}, options)

const request = async options => {
  const store = require('../../../store')
  const state = store.default.getState()
  const response = await axios(transformOptions(options, state))

  switch (response.status) {
    case HTTP_NO_CONTENT:
      return null
    default:
      return response.data
  }
}

const simpleRequest = async (method, url, params = {}, data = {}) => {
  return request({ method, url, params, data })
}

const curriedRequest = R.curryN(2, simpleRequest)

export const get = curriedRequest('get')
export const post = curriedRequest('post')

export default {
  get,
  post,
  baseURL
}
