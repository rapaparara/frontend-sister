import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TitleProvider } from './context/TitleContext'
import AdminLayout from './components/AdminLayout'
import ProtectedRoute from './pages/auth/ProtectedRoute'
import GuestRoute from './pages/auth/GuestRoute'
import { ToastContainer } from 'react-toastify'
const AdminHome = lazy(() => import('./pages/admin/Home'))
const AdminPengguna = lazy(() => import('./pages/admin/Pengguna'))
const AdminRole = lazy(() => import('./pages/admin/Role'))
const AdminSekolah = lazy(() => import('./pages/admin/Sekolah'))
const Login = lazy(() => import('./pages/auth/Login'))
const LandingPage = lazy(() => import('./pages/landing/Home'))

const App = () => {
   return (
      <TitleProvider>
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
                  <p className="mt-4 text-gray-600">Loading, please wait...</p>
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
                     </Route>
                  </Route>
               </Routes>
            </Router>
         </Suspense>
      </TitleProvider>
   )
}

export default App
