import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const Logout = () => {
  Cookies.remove('fakeNewsUserStatus')
  Cookies.remove('fakeNewsUserToken')
  Cookies.remove('fakeNewsUserDetail')
  toast.success('You have been LoggedOut Successfully')
}

export default Logout
