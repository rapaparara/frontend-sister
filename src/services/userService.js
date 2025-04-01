import api from './api'

export const getUsers = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const response = await api.get('/user', {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching users:', error)
      throw error
   }
}
