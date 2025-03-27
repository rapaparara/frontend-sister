import { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import api from '../../services/api'

const ProtectedRoute = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(null)
   const token = localStorage.getItem('access_token')

   useEffect(() => {
      const validateToken = async () => {
         try {
            const response = await api.get('/auth/validate', {
               headers: { Authorization: `Bearer ${token}` }
            })

            if (response.data.statusCode === 200 && response.data.data) {
               setIsAuthenticated(true)
            //    setUserData(response.data.data) 
            } else {
               setIsAuthenticated(false)
            }
         } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
         }
      }

      if (token) {
         validateToken()
      } else {
         setIsAuthenticated(false)
      }
   }, [token])

   if (isAuthenticated === null) {
      return <p>Loading...</p> 
   }

   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
