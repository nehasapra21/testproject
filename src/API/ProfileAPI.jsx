import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import helperAPI from './index'

//Update User Details
const UpdateProfileDetailAPI = async (body) => {
  try {
    const res = await helperAPI.putRequest('/api/User/UpdateUser', body)
    let datajson = JSON.parse(localStorage.getItem('fakeNewsUserDetail'))
    localStorage.setItem(datajson)
    return res
  } catch (err) {
    toast.error('Something Went wrong.')
  }
}
//update profile image

const ImageUpload = async (body) => {
  const res = await helperAPI.postRequest('api/File/UploadProfileImage', body)
  return res
}

///update normal user into enrolled user
const updateToEnrollUser = async () => {
  const body = {
    Id: JSON.parse(Cookies.get('fakeNewsUserDetail')).Id,
    UserType: 1
  }
  const res = await helperAPI.postRequest('api/User/UpdateUserType', body)
  return res
}
export { UpdateProfileDetailAPI, ImageUpload, updateToEnrollUser }
