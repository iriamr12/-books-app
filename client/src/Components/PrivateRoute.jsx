import React from 'react'
import { authContext } from '../Context/AuthenticationProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const auth = useContext(authContext)
  return auth.isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute