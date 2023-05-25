import helperAPI from './index'

const getLeadboard = async () => {
  try {
    const response = await helperAPI.getRequest('/api/User/GetTotalUserPoints')
    return response
  } catch (err) {
    console.warn(err)
  }
}

export { getLeadboard }
