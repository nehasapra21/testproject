const responseGoogle = async (response) => {
  const userDetail = {
    Name: response.profileObj.givenName,
    EmailAddress: response.profileObj.email,
    Password: response.profileObj.googleId,
    LoginType: 1
  }
  return userDetail
}

const responseFacebook = async (response) => {
  const userDetail = {
    Name: response.name,
    EmailAddress: response.email,
    Password: response.userID,
    LoginType: 2
  }

  return userDetail
}

export { responseGoogle, responseFacebook }
