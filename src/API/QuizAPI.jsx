import helperAPI from './index'

const saveAnswer = async (body) => {
  const res = helperAPI.postRequest('/api/User/SaveAnwser', body)
  return res
}

const saveTotalPoints = async (body) => {
  const res = helperAPI.postRequest('/api/User/SaveUserPoints', body)
  return res
}

const saveQuizTime = async (body) => {
  const res = helperAPI.postRequest('/api/User/SaveRecentQuizPlay', body)
  return res
}

const getQuizTime = async (body) => {
  const res = helperAPI.getRequest(
    `/api/User/GetRecentPlayQuizByUserAndCatId?userId=${body.userId}&categoryId=${body.catId}`
  )
  return res
}

export { saveAnswer, saveTotalPoints, saveQuizTime, getQuizTime }
