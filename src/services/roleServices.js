import api from './api'

export const getRoles = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get('/role', {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching roles:', error)
      throw error
   }
}

export const saveRole = async (data, mode) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const url = mode === 'edit' ? `/role/${data._id}` : '/role'
      const method = mode === 'edit' ? 'put' : 'post'

      const response = await api[method](url, data, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })

      return response.data
   } catch (error) {
      console.error('Error saving role:', error.response?.data || error.message)
      throw error
   }
}

export const deleteRole = async (id) => {
   try {
      const token = localStorage.getItem('access_token')
      const url = `/role/${id}`
      const response = await api.delete(url, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error deleting role:', error)
      throw error
   }
}