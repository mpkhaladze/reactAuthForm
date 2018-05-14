import tviboClient from './client'
import axios from 'axios'
import { tokenKeys, userKeys, streamKeys } from './keysForParsing'

const dataParse = (data, keys, type) => {
  const front = keys.front
  const back = keys.back

  if (type === 'Object') {
    return front.reduce((state, item, index) => {
      return {
        ...state,
        [item]: data[back[index]]
      }
    }, {})
  } else if (type === 'Array') {
    return data.map(dataItem => {
      return front.reduce((state, item, index) => {
        return {
          ...state,
          [item]: dataItem[back[index]]
        }
      }, {})
    })
  }
}

const baseURL = 'http://localhost:8000/api/v1/'

const createInstance = () => {
  const store = require('../../store')
  const state = store.default.getState()
  const token = (state && state.auth && state.auth.access_token) ? state.auth.access_token : ''
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default class TviboLagacy {
  async fetchToken (params) {
    const response = await axios.post(`${baseURL}oauth/token`, params)
    const data = response.data

    return dataParse(data, tokenKeys, 'Object')
  }

  async fetchUser () {
    const response = await tviboClient.get('users/me')
    const data = response.data

    return dataParse(data, userKeys, 'Object')
  }

}
