import api from './api'

export const getGaleri = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/gallery`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching gallery data:', error)
      throw error
   }
}

export const getGaleriKategori = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/gallery-category`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching gallery category data:', error)
      throw error
   }
}