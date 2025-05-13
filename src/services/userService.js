import api from './api'

export const getUsers = async () => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await api.get('/user', {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error fetching users:', error)
      throw error
   }
}

export const saveUser = async (data, mode) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const url = mode === 'edit' ? `/user/${data._id}` : '/user'
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
      console.error('Error saving user:', error.response?.data || error.message)
      throw error
   }
}

export const deleteUser = async (id) => {
   try {
      const token = localStorage.getItem('access_token')
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `/user/${id}`
      const response = await api.delete(url, {
         headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
         },
      })
      return response.data
   } catch (error) {
      console.error('Error deleting role:', error)
      throw error
   }
}