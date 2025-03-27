import api from './api'

export const login = async (email, password) => {
   try {
      const response = await api.post('auth/login', { email, password })
      return response.data
   } catch (error) {
      console.error('Error during login:', error)
      throw error
   }
}
