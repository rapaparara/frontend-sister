import api from './api'

export const getBerita = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/news`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching news data:', error)
      throw error
   }
}

export const getBeritaKategori = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get(`/news-category`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching news category data:', error)
      throw error
   }
}