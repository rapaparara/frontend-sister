import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TitleProvider } from './context/TitleContext'
import { AuthProvider } from './context/AuthContext'
import AdminLayout from './components/AdminLayout'
import ProtectedRoute from './pages/auth/ProtectedRoute'
import GuestRoute from './pages/auth/GuestRoute'
import { ToastContainer } from 'react-toastify'
const AdminHome = lazy(() => import('./pages/admin/Home'))
const AdminPengguna = lazy(() => import('./pages/admin/Pengguna'))
const AdminRole = lazy(() => import('./pages/admin/Role'))
const AdminSekolah = lazy(() => import('./pages/admin/Sekolah'))
const AdminAturSekolah = lazy(() => import('./pages/admin/AturSekolah'))
const AdminBerita = lazy(() => import('./pages/admin/Berita'))
const AdminBeritaKategori = lazy(() => import('./pages/admin/BeritaKategori'))
const AdminGaleri = lazy(() => import('./pages/admin/Galeri'))
const AdminGaleriKategori = lazy(() => import('./pages/admin/GaleriKategori'))
const Login = lazy(() => import('./pages/auth/Login'))
const LandingPage = lazy(() => import('./pages/landing/Home'))
const Unauthorized = lazy(() => import('./pages/Unauthorized'))

const App = () => {
   return (
      <TitleProvider>
         <AuthProvider>
            <Suspense
               fallback={
                  <div className="flex flex-col items-center justify-center min-h-screen">
                     <svg
                        className="animate-spin h-12 w-12 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                     >
                        <circle
                           className="opacity-25"
                           cx="12"
                           cy="12"
                           r="10"
                           stroke="currentColor"
                           strokeWidth="4"
                        ></circle>
                        <path
                           className="opacity-75"
                           fill="currentColor"
                           d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                     </svg>
                     <p className="mt-4 text-gray-600">
                        Loading, please wait...
                     </p>
                  </div>
               }
            >
               <Router>
                  <ToastContainer
                     position="top-right"
                     autoClose={1000}
                     hideProgressBar={false}
                     newestOnTop
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                  />
                  <Routes>
                     {/* Route untuk Guest */}
                     <Route element={<GuestRoute />}>
                        <Route path="login" element={<Login />} />
                     </Route>
                     <Route path="/" element={<LandingPage />} />
                     <Route path="/unauthorized" element={<Unauthorized />} />
                     {/* Layout untuk Admin */}
                     <Route element={<ProtectedRoute />}>
                        <Route path="/admin" element={<AdminLayout />}>
                           <Route
                              index
                              title="Dashboard"
                              element={<AdminHome />}
                           />
                           <Route
                              path="home"
                              title="Dashboard"
                              element={<AdminHome />}
                           />
                           <Route
                              path="pengguna"
                              title="Pengguna"
                              element={<AdminPengguna />}
                           />
                           <Route
                              path="role"
                              title="Role"
                              element={<AdminRole />}
                           />
                           <Route
                              path="sekolah"
                              title="Sekolah"
                              element={<AdminSekolah />}
                           />
                           <Route
                              path="atur-sekolah"
                              title="Atur Sekolah"
                              element={<AdminAturSekolah />}
                           />
                           <Route
                              path="berita"
                              title="Daftar Berita"
                              element={<AdminBerita />}
                           />
                           <Route
                              path="kategori-berita"
                              title="Kategori Berita"
                              element={<AdminBeritaKategori />}
                           />
                           <Route
                              path="galeri"
                              title="Daftar Galeri"
                              element={<AdminGaleri />}
                           />
                           <Route
                              path="kategori-galeri"
                              title="Kategori Galeri"
                              element={<AdminGaleriKategori />}
                           />
                        </Route>
                     </Route>
                  </Routes>
               </Router>
            </Suspense>
         </AuthProvider>
      </TitleProvider>
   )
}

export default App
