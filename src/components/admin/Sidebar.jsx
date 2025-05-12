import { NavLink, useNavigate } from 'react-router-dom'
import { useTitle } from '../../context/TitleContext'
import ThemeSelector from '../../utils/ThemeSelector'
import { toast } from 'react-toastify'

const Sidebar = ({ children }) => {
   const { title } = useTitle()
   const navigate = useNavigate()

   const handleLogout = () => {
      localStorage.removeItem('access_token')
      toast.success('Berhasil keluar!')
      navigate('/login')
   }

   return (
      <div className="drawer lg:drawer-open">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 text-base-content w-full px-4">
               <div className="flex-none lg:hidden">
                  <label
                     htmlFor="my-drawer-3"
                     className="btn btn-square btn-ghost"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 stroke-current"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                     </svg>
                  </label>
               </div>
               {/* Website Title */}
               <div className="flex-1 px-4">
                  <h1 className="text-xl font-semibold">{title}</h1>
               </div>
               {/* Theme Selector */}
               <ThemeSelector />
               {/* Profile Dropdown */}
               <div className="dropdown dropdown-end ml-4">
                  <label
                     tabIndex={0}
                     className="btn btn-ghost btn-circle avatar"
                  >
                     <img
                        src="/vite.svg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                     />
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a>Profile</a>
                     </li>
                     <li>
                        <a>Settings</a>
                     </li>
                     <li>
                        <a
                           href="#"
                           onClick={handleLogout}
                           style={{ cursor: 'pointer' }}
                        >
                           Logout
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Page Content */}
            {children}
         </div>

         {/* Sidebar */}
         <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <aside className="menu bg-base-200 text-base-content min-h-full w-64 p-4 shadow-md border-base-300 border-2">
               {/* Sidebar Header */}
               <div className="flex items-center space-x-2 text-xl font-semibold">
                  <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
                  <span>Website</span>
               </div>
               <div className="divider"></div>

               {/* Sidebar Menu */}
               <li className="mb-2">
                  <NavLink to="/admin/home" className="flex items-center">
                     <i className="fa-solid fa-chart-line text-lg"></i>
                     <span className="ml-2">Dashboard</span>
                  </NavLink>
               </li>
               <li className="mb-2">
                  <details>
                     <summary className="flex items-center">
                        <i className="fa-solid fa-users-cog text-lg"></i>
                        <span className="ml-2">Akses & Pengguna</span>
                     </summary>
                     <ul className="ml-6 mt-2 space-y-2">
                        <li className="mb-2">
                           <NavLink
                              to="/admin/pengguna"
                              className="flex items-center"
                           >
                              <i className="fa-solid fa-user text-lg"></i>
                              <span className="ml-2">Pengguna</span>
                           </NavLink>
                        </li>
                        <li className="mb-2">
                           <NavLink
                              to="/admin/role"
                              className="flex items-center"
                           >
                              <i className="fa-solid fa-user-tie text-lg"></i>
                              <span className="ml-2">Role</span>
                           </NavLink>
                        </li>
                     </ul>
                  </details>
               </li>

               <li className="mb-2">
                  <NavLink
                     to="/admin/atur-sekolah"
                     className="flex items-center"
                  >
                     <i className="fa-solid fa-cog text-lg"></i>
                     <span className="ml-2">Atur Sekolah</span>
                  </NavLink>
               </li>
               <li className="mb-2">
                  <NavLink to="/admin/sekolah" className="flex items-center">
                     <i className="fa-solid fa-school text-lg"></i>
                     <span className="ml-2">Sekolah</span>
                  </NavLink>
               </li>

               {/* Settings Dropdown */}
               <li className="mb-2">
                  <details>
                     <summary className="flex items-center">
                        <i className="fa-solid fa-gear text-lg"></i>
                        <span className="ml-2">Settings</span>
                     </summary>
                     <ul className="ml-6 mt-2 space-y-2">
                        <li>
                           <NavLink
                              to="/admin/settings/profile"
                              className="flex items-center"
                           >
                              <i className="fa-solid fa-user text-sm"></i>
                              <span className="ml-2">Profile</span>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/admin/settings/security"
                              className="flex items-center"
                           >
                              <i className="fa-solid fa-lock text-sm"></i>
                              <span className="ml-2">Security</span>
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/admin/settings/notifications"
                              className="flex items-center"
                           >
                              <i className="fa-solid fa-bell text-sm"></i>
                              <span className="ml-2">Notifications</span>
                           </NavLink>
                        </li>
                     </ul>
                  </details>
               </li>
            </aside>
         </div>
      </div>
   )
}

export default Sidebar
