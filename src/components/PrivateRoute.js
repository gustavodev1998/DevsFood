import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default ({ children, ...rest }) => {
  const token = useSelector(state => state.user.token)

  const navigate = useNavigate()

  if (!token || token == '') {
    navigate('/login')
    return
  }

  return <Route {...rest}>{children}</Route>
}
