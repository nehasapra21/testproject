import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isUserLogged = Cookies.get('fakeNewsUserStatus') ? true : false

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLogged === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
