import client from './client'
import axios from 'axios'

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

export default class BaseApi {
  async fetchToken (params) {
    const response = await axios.post(`${baseURL}oauth/token`, params)
    return response.data
  }

  async fetchUser () {
    const response = await client.get('users/me')
    return data = response.data
  }

  // async getTimeZones () {
  //   return tviboClient.get('ui/timezones')
  // }

  // async addGeoLocking (params) {
  //   const response = await createInstance().post(`streams/${params.stream_id}/geolockings`, params)
  //   return response.data
  // }
}
