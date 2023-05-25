import { toast } from 'react-toastify'
import helperAPI from './index'

const getQuestions = async (body) => {
  const response = await helperAPI.postRequest(
    'api/CategoryQuestions/GetAllApiCategoryQuestions',
    body
  )
  return response
}

const getAllCategory = async () => {
  try {
    const response = await helperAPI.getRequest('/api/Category/GetAllCategory')

    return response.data
  } catch (err) {
    console.log('err', err)
  }
}

const saveUserCategory = async (body) => {
  try {
    const response = await helperAPI.postRequest(
      '/api/Category/SaveUserCategory',
      body
    )

    toast.success('User categories updated.')

    return true
  } catch (err) {
    toast.error('Unable to update user categories.')
    return false
    // err will goes here
  }
}

const getQuestionsByUserId = async (body) => {
  const res = await helperAPI.getRequest(
    `/api/Category/GetApiAllCategoryByUserId?userId=${body}`
  )
  return res
}

const getCategoryQUestionById = async (body) => {
  try {
    const res = await helperAPI.getRequest(
      `/api/CategoryQuestions/GetAllApiQuestionsByCategoryId?categoryId=${body}`
    )
    return res.data
  } catch {}
}

export {
  getQuestions,
  getAllCategory,
  saveUserCategory,
  getQuestionsByUserId,
  getCategoryQUestionById
}
