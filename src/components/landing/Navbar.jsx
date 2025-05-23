import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ schoolName }) => {
   const [isOpen, setIsOpen] = useState(false)

   const menuItems = [
      {
         name: 'Profil Sekolah',
         children: [
            { name: 'Sambutan Kepala Sekolah', url: '#sambutan' },
            { name: 'Sejarah', url: '#' },
            { name: 'Visi & Misi', url: '#visi-misi' },
            { name: 'Kondisi Sekolah', url: '#gallery' },
         ],
      },
      { name: 'Berita', url: '#' },
      { name: 'Prestasi', url: '#' },
      { name: 'Profil Alumni', url: '#alumni' },
      { name: 'Kontak', url: '#contact' },
   ]
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <div
         className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled
               ? 'bg-base-100 text-base-content shadow-md'
               : 'bg-transparent text-base-100'
         }`}
      >
         {/* Left Side */}
         <div className="navbar-start">
            <a className="btn btn-ghost text-xl">
               <img className="me-2" src="/vite.svg" alt="Logo" />
               {schoolName}
            </a>
         </div>

         {/* Mobile Menu Button */}
         <div className="navbar-end lg:hidden">
            <button
               className="btn btn-ghost btn-square"
               onClick={() => setIsOpen(!isOpen)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  {isOpen ? (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  ) : (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                     />
                  )}
               </svg>
            </button>
         </div>

         {/* Desktop Menu */}
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
               {menuItems.map((item, index) =>
                  item.children ? (
                     <li key={index}>
                        <details
                           onBlur={(e) =>
                              e.currentTarget.removeAttribute('open')
                           }
                        >
                           <summary>{item.name}</summary>
                           <ul className="bg-base-100 text-base-content rounded-t-none p-2 min-w-max">
                              {item.children.map((child, childIndex) => (
                                 <li key={childIndex}>
                                    <a href={child.url}>{child.name}</a>
                                 </li>
                              ))}
                           </ul>
                        </details>
                     </li>
                  ) : (
                     <li key={index}>
                        <a href={item.url}>{item.name}</a>
                     </li>
                  )
               )}
            </ul>
         </div>

         {/* Masuk Button */}
         <div className="navbar-end hidden lg:flex">
            <NavLink
               to="/admin/pengguna"
               className="btn btn-success bg-emerald-500 text-white font-semibold text-lg"
            >
               <i className="fa-solid fa-right-to-bracket text-lg"></i>
               <span className="ml-2">Masuk</span>
            </NavLink>
         </div>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-base-100 text-base-content shadow-md lg:hidden z-40">
               <ul className="menu p-2 text-lg">
                  {menuItems.map((item, index) =>
                     item.children ? (
                        <li key={index}>
                           <details
                              onBlur={(e) =>
                                 e.currentTarget.removeAttribute('open')
                              }
                           >
                              <summary>{item.name}</summary>
                              <ul className="bg-base-100 rounded-t-none p-2">
                                 {item.children.map((child, childIndex) => (
                                    <li key={childIndex}>
                                       <a href={child.url}>{child.name}</a>
                                    </li>
                                 ))}
                              </ul>
                           </details>
                        </li>
                     ) : (
                        <li key={index}>
                           <a href={item.url}>{item.name}</a>
                        </li>
                     )
                  )}
               </ul>
            </div>
         )}
      </div>
   )
}

export default Navbar
