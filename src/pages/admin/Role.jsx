import { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import DynamicTable from '../../components/admin/DynamicTable'
import Footer from '../../components/admin/Footer'
import { getRoles } from '../../services/roleServices'

const Pengguna = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [searchTerm, setSearchTerm] = useState('')

   const fetchData = async () => {
      try {
         const response = await getRoles()
         setData(response.data)
         setError(null)
      } catch (err) {
         setError(err.message)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   const handleSearch = (term) => {
      setSearchTerm(term.toLowerCase())
   }

   const handleAdd = () => {
      console.log('Add new role')
   }

   const columns = [
      { label: 'Nama', field: 'name' },
      { label: 'Kode', field: 'slug' },
      { label: 'Hak Akses', field: 'permissions' },
   ]

   const filteredData = data.filter(
      (item) =>
         item.name.toLowerCase().includes(searchTerm) ||
         item.email.toLowerCase().includes(searchTerm)
   )

   const actions = (row) => (
      <div className="flex gap-2">
         <button
            className="btn btn-sm btn-warning"
            onClick={() => handleEdit(row)}
         >
            Edit
         </button>
         <button
            className="btn btn-sm btn-error"
            onClick={() => handleDelete(row._id)}
         >
            Hapus
         </button>
      </div>
   )

   const handleEdit = (row) => {
      console.log('Edit role:', row)
   }

   const handleDelete = (id) => {
      console.log('Delete role dengan ID:', id)
   }
   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Role</div>

               {loading ? (
                  <div className="text-center py-8">Memuat data...</div>
               ) : error ? (
                  <div className="text-center py-8 text-red-500">
                     Error: {error}
                  </div>
               ) : (
                  <DynamicTable
                     columns={columns}
                     data={filteredData}
                     onSearch={handleSearch}
                     onAdd={handleAdd}
                     actions={actions}
                  />
               )}
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Pengguna
