import api from './api'

export const getRoles = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const response = await api.get('/role', {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching roles:', error)
      throw error
   }
}
