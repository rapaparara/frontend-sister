import api from './api'

export const getSchools = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const response = await api.get('/school', {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching Schools:', error)
      throw error
   }
}
