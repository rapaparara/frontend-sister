import { useState, useEffect } from 'react'
import Breadcrumbs from '../../components/admin/Breadcrumbs'
import Footer from '../../components/admin/Footer'
import { getLanding, updateLanding } from '../../services/landingServices'
import { toast } from 'react-toastify'

const AturSekolah = () => {
   const [schoolData, setSchoolData] = useState({
      _id: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      visi: [],
      misi: [],
   })

   useEffect(() => {
      const fetchSchoolData = async () => {
         try {
            const data = await getLanding()
            if (data.statusCode === 200) {
               const { _id, name, address, phone, email, visi, misi } = data.data
               setSchoolData({
                  _id,
                  name,
                  address,
                  phone,
                  email,
                  visi,
                  misi,
               })
            }
         } catch (error) {
            console.error('Error fetching school data:', error)
         }
      }

      fetchSchoolData()
   }, [])

   const handleInputChange = (e) => {
      const { name, value } = e.target
      if (name === 'visi' || name === 'misi') {
         setSchoolData({
            ...schoolData,
            [name]: value.split('\n'),
         })
      } else {
         setSchoolData({
            ...schoolData,
            [name]: value,
         })
      }
   }

   const handleVisiChange = (index, value) => {
      const updatedVisi = [...schoolData.visi]
      updatedVisi[index] = value
      setSchoolData({
         ...schoolData,
         visi: updatedVisi,
      })
   }

   const handleMisiChange = (index, value) => {
      const updatedMisi = [...schoolData.misi]
      updatedMisi[index] = value
      setSchoolData({
         ...schoolData,
         misi: updatedMisi,
      })
   }

   const addVisi = () => {
      setSchoolData({
         ...schoolData,
         visi: [...schoolData.visi, ''],
      })
   }

   const addMisi = () => {
      setSchoolData({
         ...schoolData,
         misi: [...schoolData.misi, ''],
      })
   }

   const removeVisi = (index) => {
      const updatedVisi = schoolData.visi.filter((_, i) => i !== index)
      setSchoolData({
         ...schoolData,
         visi: updatedVisi,
      })
   }

   const removeMisi = (index) => {
      const updatedMisi = schoolData.misi.filter((_, i) => i !== index)
      setSchoolData({
         ...schoolData,
         misi: updatedMisi,
      })
   }

   const handleUpdate = async () => {
      try {
         console.log('Updating school with ID:', schoolData._id)

         const result = await updateLanding(schoolData)
         console.log(result)
         toast.success('Perubahan berhasil disimpan!')
      } catch (error) {
         toast.error('Gagal memperbarui data sekolah.')
         console.log(error)
      }
   }

   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Atur Sekolah</div>
               <div className="container mx-auto mb-3 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                     <div className="col-span-1 py-4">
                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Nama Sekolah
                           </label>
                           <input
                              type="text"
                              name="name"
                              value={schoolData.name}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Masukkan nama sekolah"
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Alamat
                           </label>
                           <input
                              type="text"
                              name="address"
                              value={schoolData.address}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Masukkan alamat"
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Nomor Telepon
                           </label>
                           <input
                              type="text"
                              name="phone"
                              value={schoolData.phone}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Masukkan nomor telepon"
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Email
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={schoolData.email}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Masukkan email"
                           />
                        </div>
                     </div>

                     <div className="col-span-1 p-4">
                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Visi
                           </label>
                           {schoolData.visi.map((visiItem, index) => (
                              <div
                                 key={index}
                                 className="flex items-center space-x-2 mb-2"
                              >
                                 <input
                                    type="text"
                                    value={visiItem}
                                    onChange={(e) =>
                                       handleVisiChange(index, e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder={`Visi ${index + 1}`}
                                 />
                                 <button
                                    onClick={() => removeVisi(index)}
                                    className="text-red-500 ml-2"
                                 >
                                    &times;
                                 </button>
                              </div>
                           ))}
                           <button
                              onClick={addVisi}
                              className="btn btn-primary"
                           >
                              Tambah Visi
                           </button>
                        </div>

                        <div className="mb-4">
                           <label className="block text-sm font-semibold mb-2">
                              Misi
                           </label>
                           {schoolData.misi.map((misiItem, index) => (
                              <div
                                 key={index}
                                 className="flex items-center space-x-2 mb-2"
                              >
                                 <input
                                    type="text"
                                    value={misiItem}
                                    onChange={(e) =>
                                       handleMisiChange(index, e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder={`Misi ${index + 1}`}
                                 />
                                 <button
                                    onClick={() => removeMisi(index)}
                                    className="text-red-500 ml-2"
                                 >
                                    &times;
                                 </button>
                              </div>
                           ))}
                           <button
                              onClick={addMisi}
                              className="btn btn-primary"
                           >
                              Tambah Misi
                           </button>
                        </div>

                        <div className="flex justify-end">
                           <button
                              onClick={handleUpdate}
                              className="btn btn-primary"
                           >
                              Simpan Perubahan
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default AturSekolah
