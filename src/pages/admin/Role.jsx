import { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import DynamicTable from '../../components/admin/DynamicTable'
import Footer from '../../components/admin/Footer'
import { getRoles, saveRole } from '../../services/roleServices'
import Modal from '../../components/admin/Modal'

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
      handleOpenModal('tambah')
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

   // const handleEdit = (row) => {
   //    console.log('Edit role:', row)
   // }

   const handleDelete = (id) => {
      console.log('Delete role dengan ID:', id)
   }

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [mode, setMode] = useState('tambah') // 'tambah' atau 'edit'
   const [formData, setFormData] = useState({
      id: '',
      name: '',
      slug: '',
      permissions: [],
   })
   const handleOpenModal = (mode, user = null) => {
      setMode(mode)
      if (mode === 'edit' && user) {
         setFormData({
            id: user._id || '',
            name: user.name || '',
            slug: user.slug || '',
            permissions: Array.isArray(user.permissions)
               ? user.permissions
               : [],
         })
      } else {
         setFormData({
            id: '',
            name: '',
            slug: '',
            permissions: [],
         })
      }
      setIsModalOpen(true)
   }

   const handleSubmit = async () => {
      try {
         await saveRole(formData, mode)
         alert('Role berhasil disimpan!')
         setIsModalOpen(false)

         const updatedRoles = await getRoles()
      } catch (error) {
         alert('Gagal menyimpan role!')
         console.log(error)
      }
   }
   const handleEdit = (id) => {
      const user = id
      handleOpenModal('edit', user)
   }

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })
   }
   const handleCloseModal = () => setIsModalOpen(false)
   const allPermissions = [
      '*',
      'GET USER',
      'POST USER',
      'PUT USER',
      'DELETE USER',
      'GET ROLE',
      'POST ROLE',
      'PUT ROLE',
      'DELETE ROLE',
      'GET SCHOOL',
      'POST SCHOOL',
      'PUT SCHOOL',
      'DELETE SCHOOL',
      'POST AUTH',
   ]

   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Data Role</div>

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
               {/* Modal */}
               <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  title={mode === 'tambah' ? 'Tambah Role Baru' : 'Edit Role'}
               >
                  <form onSubmit={handleSubmit}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Nama</span>
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="Masukkan nama role"
                           className="input input-bordered w-full"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Slug</span>
                        </label>
                        <input
                           type="text"
                           name="slug"
                           placeholder="Masukkan nama role"
                           className="input input-bordered w-full"
                           value={formData.slug}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Hak Akses</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                           {allPermissions.map((perm) => {
                              const isSuperAdmin =
                                 formData.permissions.includes('*')
                              const isThisSuperAdminCheckbox = perm === '*'

                              return (
                                 <label
                                    key={perm}
                                    className="flex items-center gap-2"
                                 >
                                    <input
                                       type="checkbox"
                                       value={perm}
                                       checked={
                                          isSuperAdmin ||
                                          formData.permissions.includes(perm)
                                       }
                                       disabled={
                                          isSuperAdmin &&
                                          !isThisSuperAdminCheckbox
                                       } // hanya checkbox selain '*' yang disable
                                       onChange={(e) => {
                                          const checked = e.target.checked
                                          const value = e.target.value

                                          setFormData((prev) => {
                                             // Kalau 'SuperAdmin' sedang aktif dan dia uncheck '*'
                                             if (value === '*') {
                                                return {
                                                   ...prev,
                                                   permissions: checked
                                                      ? ['*']
                                                      : [],
                                                }
                                             }

                                             // Kalau tidak menyentuh '*', update normal
                                             return {
                                                ...prev,
                                                permissions: checked
                                                   ? [
                                                        ...prev.permissions,
                                                        value,
                                                     ]
                                                   : prev.permissions.filter(
                                                        (p) => p !== value
                                                     ),
                                             }
                                          })
                                       }}
                                    />
                                    <span>
                                       {perm === '*'
                                          ? 'Semua Akses (SuperAdmin)'
                                          : perm}
                                    </span>
                                 </label>
                              )
                           })}
                        </div>
                     </div>

                     <div className="modal-action mt-6">
                        <button
                           type="button"
                           className="btn"
                           onClick={handleCloseModal}
                        >
                           Batal
                        </button>
                        <button type="submit" className="btn btn-primary">
                           {mode === 'tambah' ? 'Tambah' : 'Simpan Perubahan'}
                        </button>
                     </div>
                  </form>
               </Modal>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Pengguna
