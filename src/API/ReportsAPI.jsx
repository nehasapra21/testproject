import helperAPI from './index'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const getReportsList = async () => {
  const userId = JSON.parse(Cookies.get('fakeNewsUserDetail')).Id
  try {
    const response = await helperAPI.getRequest(
      `/api/Category/GetQuizPayOfUserByUserId?userId=${userId}`
    )

    return response
  } catch (err) {
    toast.error('Unable to fetch report data.')
    return false
  }
}
const ViewAnswerAPI = async (id) => {
  try {
    const res = await helperAPI.getRequest(
      `/api/CategoryQuestions/GetAllCatQuestionsByPlayId?playid=${id}`
    )

    return res.data
  } catch (err) {
    toast.error('Unable to fetch answerlist data.')
    return false
  }
}
export { ViewAnswerAPI, getReportsList }
