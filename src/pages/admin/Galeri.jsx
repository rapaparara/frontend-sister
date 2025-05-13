import { useState, useEffect } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import Footer from '../../components/admin/Footer'
import DynamicTable from '../../components/admin/DynamicTable'
import Modal from '../../components/admin/Modal'
const Galeri = () => {
   const [data, setData] = useState([])
   const [searchQuery, setSearchQuery] = useState('')
   // Sample Table Field
   const columns = [
      { label: 'Name', field: 'name' },
      { label: 'Job', field: 'job' },
      { label: 'Favorite Color', field: 'color' },
   ]

   // Fetch Data Simulasi
   useEffect(() => {
      const fetchData = async () => {
         // Contoh data
         const response = [
            {
               name: 'Cy Ganderton 1',
               job: 'Quality Control Specialist',
               color: 'Blue',
            },
            {
               name: 'Hart Hagerty',
               job: 'Desktop Support Technician',
               color: 'Purple',
            },
            { name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
         ]
         setData(response)
      }
      fetchData()
   }, [])

   const handleSearch = (query) => {
      setSearchQuery(query)
   }

   const [isModalOpen, setIsModalOpen] = useState(false)
   // Handle Add Data
   const [mode, setMode] = useState('tambah') // 'tambah' atau 'edit'
   const [formData, setFormData] = useState({
      id: '',
      nama: '',
      email: '',
      alamat: '',
      telepon: '',
      tanggalLahir: '',
   })
   const handleOpenModal = (mode, user = null) => {
      setMode(mode)
      if (mode === 'edit' && user) {
         setFormData(user)
      } else {
         setFormData({
            id: '',
            nama: '',
            email: '',
            alamat: '',
            telepon: '',
            tanggalLahir: '',
         })
      }
      setIsModalOpen(true)
   }

   // Handle perubahan input
   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })
   }
   const handleCloseModal = () => setIsModalOpen(false)
   const handleAdd = () => {
      handleOpenModal('tambah')
   }
   // Handle submit form
   const handleSubmit = (e) => {
      console.log(e)
      handleCloseModal()
   }
   // Handle Edit
   const handleEdit = (id) => {
      const user = id
      handleOpenModal('edit', user)
   }

   // Handle Delete
   const handleDelete = (id) => {
      const confirmDelete = window.confirm(
         'Apakah Anda yakin ingin menghapus data ini?'
      )
      if (confirmDelete) {
         setData(data.filter((item) => item.id !== id))
      }
   }

   // Filter data berdasarkan pencarian
   const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
         value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
   )

   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Stats Cards</div>
               <div className="container mx-auto mb-3 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
               </div>
               <div className="text-lg font-semibold p-2">Dynamic Table</div>
               <DynamicTable
                  columns={columns}
                  data={filteredData}
                  onSearch={handleSearch}
                  onAdd={handleAdd}
                  actions={(row) => (
                     <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost btn-sm">
                           ⋮
                        </button>
                        <ul
                           tabIndex={0}
                           className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
                        >
                           <li>
                              <button
                                 className="text-warning"
                                 onClick={() => handleEdit(row.id)}
                              >
                                 ✏️ Edit
                              </button>
                           </li>
                           <li>
                              <button
                                 className="text-error"
                                 onClick={() => handleDelete(row.id)}
                              >
                                 ❌ Delete
                              </button>
                           </li>
                        </ul>
                     </div>
                  )}
               />
               {/* Modal */}
               <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  title={mode === 'tambah' ? 'Tambah User Baru' : 'Edit User'}
               >
                  <form onSubmit={handleSubmit}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Nama</span>
                        </label>
                        <input
                           type="text"
                           name="nama"
                           placeholder="Masukkan nama"
                           className="input input-bordered w-full"
                           value={formData.nama}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control mt-4">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="Masukkan email"
                           className="input input-bordered w-full"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control mt-4">
                        <label className="label">
                           <span className="label-text">Alamat</span>
                        </label>
                        <input
                           type="text"
                           name="alamat"
                           placeholder="Masukkan alamat"
                           className="input input-bordered w-full"
                           value={formData.alamat}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control mt-4">
                        <label className="label">
                           <span className="label-text">Telepon</span>
                        </label>
                        <input
                           type="tel"
                           name="telepon"
                           placeholder="Masukkan nomor telepon"
                           className="input input-bordered w-full"
                           value={formData.telepon}
                           onChange={handleInputChange}
                           required
                        />
                     </div>

                     <div className="form-control mt-4">
                        <label className="label">
                           <span className="label-text">Tanggal Lahir</span>
                        </label>
                        <input
                           type="date"
                           name="tanggalLahir"
                           className="input input-bordered w-full"
                           value={formData.tanggalLahir}
                           onChange={handleInputChange}
                           required
                        />
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

export default Galeri
