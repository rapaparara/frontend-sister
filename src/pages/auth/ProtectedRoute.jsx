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
               headers: { Authorization: `Bearer ${token}` },
            })

            if (response.data.statusCode === 200 && response.data.data) {
               setIsAuthenticated(true)
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
      return (
         <div className="flex flex-col items-center justify-center min-h-screen">
            <svg
               className="animate-spin h-12 w-12 text-blue-500"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
            >
               <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
               ></circle>
               <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
               ></path>
            </svg>
            <p className="mt-4 text-gray-600">Loading, please wait...</p>
         </div>
      )
   }

   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
