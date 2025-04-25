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

export const saveRole = async (data, mode) => {
   try {
      const token = localStorage.getItem('access_token')
      const url = mode === 'edit' ? `/role/${data.id}` : '/role'
      const method = mode === 'edit' ? 'put' : 'post'

      const response = await api[method](url, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })

      return response.data
   } catch (error) {
      console.error('Error saving role:', error)
      throw error
   }
}
 
