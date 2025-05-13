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

export const saveGaleriKategori = async (data, mode) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const url =
         mode === 'edit' ? `/gallery-category/${data._id}` : '/gallery-category'
      const method = mode === 'edit' ? 'put' : 'post'
      const { _id, ...payload } = data

      const response = await api[method](url, payload, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })

      return response.data
   } catch (error) {
      console.error(
         'Error saving gallery category:',
         error.response?.data || error.message
      )
      throw error
   }
}

export const deleteGaleriKategori = async (id) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `/gallery-category/${id}`
      const response = await api.delete(url, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error deleting gallery category:', error)
      throw error
   }
}