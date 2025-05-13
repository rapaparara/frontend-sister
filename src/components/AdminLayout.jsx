import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './admin/Sidebar'
import { useEffect } from 'react'
import { useTitle } from '../context/TitleContext'
const AdminLayout = () => {
   const location = useLocation()
   const { setTitle } = useTitle()
   useEffect(() => {
      const routeTitles = {
         '/admin': 'Dashboard',
         '/admin/home': 'Dashboard',
         '/admin/pengguna': 'Manajemen Pengguna',
         '/admin/role': 'Manajemen Role',
         '/admin/sekolah': 'Manajemen Sekolah',
         '/admin/atur-sekolah': 'Atur Sekolah',
         '/admin/berita': 'Daftar Berita',
         '/admin/kategori-berita': 'Kategori Berita',
         '/admin/galeri': 'Daftar Galeri',
         '/admin/kategori-galeri': 'Kategori Galeri',
      }

      setTitle(routeTitles[location.pathname] || 'Admin Panel')
   }, [location.pathname, setTitle])

   return (
      <div className="bg-base-200">
         <Sidebar>
            <Outlet />
         </Sidebar>
      </div>
   )
}

export default AdminLayout
