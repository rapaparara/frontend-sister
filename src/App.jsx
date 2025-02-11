import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TitleProvider } from './context/TitleContext'
import AdminLayout from './components/AdminLayout'
const AdminHome = lazy(() => import('./pages/admin/Home'))
const AdminPengguna = lazy(() => import('./pages/admin/Pengguna'))
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
               <Routes>
                  {/* Route untuk Guest */}
                  <Route path="login" element={<Login />} />
                  <Route path="/" element={<LandingPage />} />
                  {/* Layout untuk Admin */}
                  <Route path="/admin" element={<AdminLayout />}>
                     <Route index title="Dashboard" element={<AdminHome />} />
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
                  </Route>
               </Routes>
            </Router>
         </Suspense>
      </TitleProvider>
   )
}

export default App
