/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL } from '../constants'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000
})

/* This is interceptor to add token in next upcoming api request */

instance.interceptors.request.use((config) => {
  const token = Cookies.get('fakeNewsUserToken')
    ? Cookies.get('fakeNewsUserToken')
    : ''

  config.headers.Authorization = `Bearer ${token}`

  return config
})

const getRequest = (API, body) => instance.get(API, body)

const postRequest = (API, body) => instance.post(API, body)

const putRequest = (API, body) => instance.put(API, body)

export default {
  getRequest,
  postRequest,
  putRequest
}
