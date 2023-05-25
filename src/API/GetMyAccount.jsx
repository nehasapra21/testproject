import helperAPI from './index'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const getMyAccountDetail = async () => {
  const userId = JSON.parse(Cookies.get('fakeNewsUserDetail')).Id

  try {
    const response = await helperAPI.getRequest(
      `/api/User/GetUserById?id=${userId}`
    )
    return response
  } catch (err) {
    toast.error('Unable to fetch user data.')
    return false
  }
}

export default getMyAccountDetail
