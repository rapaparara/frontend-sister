import { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)

   useEffect(() => {
      const token = localStorage.getItem('access_token')
      if (token) {
         try {
            const decoded = jwtDecode(token)
            setUser(decoded)
         } catch (err) {
            console.error('Token tidak valid')
            console.error(err)
         }
      }
   }, [])

   return (
      <AuthContext.Provider value={{ user, setUser }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext)
