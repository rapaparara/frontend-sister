import api from './api'

export const getLanding = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/school/api-key?key=${apiKey}`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching school data:', error)
      throw error
   }
}

export const updateLanding = async (data) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY

      if (!data?._id) throw new Error('ID sekolah tidak tersedia.')
      if (!token) throw new Error('Token tidak ditemukan di localStorage.')
      if (!apiKey) throw new Error('API key tidak ditemukan di environment.')

      const url = `/school/${data._id}`
      const { _id, ...payload } = data
      
      const response = await api.put(url, payload, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })

      return response.data
   } catch (error) {
      console.error('Error updating data:', error.response?.data || error.message)
      throw error.response?.data || error
   }
}


export const getLandingPublic = async () => {
   try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/school/public/api-key?key=${apiKey}`, {
         headers: {
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching school data:', error)
      throw error
   }
}
