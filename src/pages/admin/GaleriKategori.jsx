import { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import DynamicTable from '../../components/admin/DynamicTable'
import Footer from '../../components/admin/Footer'
import Modal from '../../components/admin/Modal'
import { toast } from 'react-toastify'
import {
   getGaleriKategori,
   saveGaleriKategori,
   deleteGaleriKategori,
} from '../../services/galeriServices'

const GaleriKategori = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [searchTerm, setSearchTerm] = useState('')

   const fetchData = async () => {
      try {
         const catRes = await getGaleriKategori()
         setData(catRes.data)
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
      { label: 'Deskripsi', field: 'description' },
   ]

   const filteredData = data.filter(
      (item) =>
         item.name.toLowerCase().includes(searchTerm) ||
         item.description.toLowerCase().includes(searchTerm)
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
         await deleteGaleriKategori(userIdToDelete)
         toast.success('Kategori berhasil dihapus!')
         setIsConfirmDeleteModalOpen(false)
         fetchData()
      } catch (error) {
         toast.error('Gagal menghapus kategori!')
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
      description: '',
   })

   const handleOpenModal = (mode, category = null) => {
      setMode(mode)
      if (mode === 'edit' && category) {
         setFormData({
            _id: category._id || '',
            name: category.name || '',
            description: category.description || '',
         })
      } else {
         setFormData({
            id: '',
            description: '',
         })
      }
      setIsModalOpen(true)
   }

   const handleEdit = (category) => {
      handleOpenModal('edit', category)
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

      try {
         await saveGaleriKategori(payload, mode)
         toast.success('Kategori berhasil disimpan!')
         setIsModalOpen(false)
         fetchData()
      } catch (error) {
         toast.error(
            'Gagal menyimpan kategori: ' +
               (error.response?.data?.message || error.message)
         )
      }
   }

   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">
                  Data Kategori Galeri
               </div>

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
                        ? 'Tambah Kategori Galeri Baru'
                        : 'Edit Kategori Galeri'
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
                           placeholder="Masukkan nama kategori"
                           className="input input-bordered w-full"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Deskripsi</span>
                        </label>
                        <input
                           type="text"
                           name="description"
                           placeholder="Masukkan deskripsi"
                           className="input input-bordered w-full"
                           value={formData.description}
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
            <div>Apakah Anda yakin ingin menghapus kategori ini?</div>
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

export default GaleriKategori
