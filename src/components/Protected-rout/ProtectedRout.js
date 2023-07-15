/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/Login' }) => {
  const login = localStorage.getItem('login')
  if (!login) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}
