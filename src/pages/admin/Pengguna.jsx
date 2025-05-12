import { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import DynamicTable from '../../components/admin/DynamicTable'
import Footer from '../../components/admin/Footer'
import { getUsers, saveUser, deleteUser } from '../../services/userService'
import Modal from '../../components/admin/Modal'
import { toast } from 'react-toastify'
import { getRoles } from '../../services/roleServices'

const Pengguna = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [searchTerm, setSearchTerm] = useState('')
   const [roles, setRoles] = useState([])

   const fetchData = async () => {
      try {
         const [userRes, roleRes] = await Promise.all([getUsers(), getRoles()])
         setData(userRes.data)
         setRoles(roleRes.data)
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
      { label: 'Email', field: 'email' },
      { label: 'Role', field: 'role.name' },
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

   const handleDelete = async (id) => {
      setUserIdToDelete(id)
      setIsConfirmDeleteModalOpen(true)
   }

   const confirmDelete = async () => {
      try {
         await deleteUser(userIdToDelete)
         toast.success('Pengguna berhasil dihapus!')
         setIsConfirmDeleteModalOpen(false)
         fetchData()
      } catch (error) {
         toast.error('Gagal menghapus pengguna!')
      }
   }

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [mode, setMode] = useState('tambah')
   const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
      useState(false)
   const [userIdToDelete, setUserIdToDelete] = useState(null)

   const [formData, setFormData] = useState({
      _id: '',
      name: '',
      email: '',
      password: '',
      role: '',
   })

   const handleOpenModal = (mode, user = null) => {
      setMode(mode)
      if (mode === 'edit' && user) {
         setFormData({
            _id: user._id || '',
            name: user.name || '',
            email: user.email || '',
            password: '',
            role: user.role?._id || '',
         })
      } else {
         setFormData({
            id: '',
            name: '',
            email: '',
            password: '',
            role: '',
         })
      }
      setIsModalOpen(true)
   }

   const handleEdit = (user) => {
      handleOpenModal('edit', user)
   }

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })
   }

   const handleCloseModal = () => {
      setIsModalOpen(false)
      setIsConfirmDeleteModalOpen(false)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      const { id, ...payload } = formData

      if (mode === 'tambah') {
         if (!payload.password) {
            toast.error('Password wajib diisi!')
            return
         }
      }

      try {
         await saveUser(payload, mode)
         toast.success('Pengguna berhasil disimpan!')
         setIsModalOpen(false)
         fetchData()
      } catch (error) {
         toast.error(
            'Gagal menyimpan pengguna: ' +
               (error.response?.data?.message || error.message)
         )
      }
   }

   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Data Pengguna</div>

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

               <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  title={
                     mode === 'tambah'
                        ? 'Tambah Pengguna Baru'
                        : 'Edit Pengguna'
                  }
               >
                  <form onSubmit={handleSubmit}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Nama</span>
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="Masukkan nama pengguna"
                           className="input input-bordered w-full"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="Masukkan email pengguna"
                           className="input input-bordered w-full"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     {mode === 'tambah' && (
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Password</span>
                           </label>
                           <input
                              type="password"
                              name="password"
                              placeholder="Masukkan password"
                              className="input input-bordered w-full"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                           />
                        </div>
                     )}

                     {/* 
                        // untuk edit password:
                        {mode === 'edit' && (
                           <div className="form-control">
                              <label className="label">
                                 <span className="label-text">Password (opsional)</span>
                              </label>
                              <input
                                 type="password"
                                 name="password"
                                 placeholder="Kosongkan jika tidak ingin mengganti"
                                 className="input input-bordered w-full"
                                 value={formData.password}
                                 onChange={handleInputChange}
                              />
                           </div>
                        )}
                     */}

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Role</span>
                        </label>
                        <select
                           name="role"
                           className="select select-bordered w-full"
                           value={formData.role}
                           onChange={handleInputChange}
                           required
                        >
                           <option value="">Pilih Role</option>
                           {roles.map((role) => (
                              <option key={role._id} value={role._id}>
                                 {role.name}
                              </option>
                           ))}
                        </select>
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
                           {mode === 'tambah' ? 'Tambah' : 'Simpan'}
                        </button>
                     </div>
                  </form>
               </Modal>
            </div>
         </div>

         <Footer />

         <Modal
            isOpen={isConfirmDeleteModalOpen}
            onClose={handleCloseModal}
            title="Konfirmasi Hapus"
         >
            <div>Apakah Anda yakin ingin menghapus pengguna ini?</div>
            <div className="modal-action">
               <button className="btn" onClick={handleCloseModal}>
                  Batal
               </button>
               <button className="btn btn-error" onClick={confirmDelete}>
                  Hapus
               </button>
            </div>
         </Modal>
      </>
   )
}

export default Pengguna
