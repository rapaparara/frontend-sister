import { Link } from 'react-router-dom'

const Unauthorized = () => {
   return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
         <div className="text-center p-8 rounded-xl shadow-xl bg-base-100 border border-base-300">
            <i className="fa-solid fa-triangle-exclamation text-red-500 text-6xl mb-4 animate-pulse"></i>
            <h1 className="text-3xl font-bold mb-2 text-error">
               403 - Unauthorized
            </h1>
            <p className="text-base text-base-content/70 mb-6">
               Anda tidak memiliki izin untuk mengakses halaman ini.
            </p>
            <Link to="/" className="btn btn-outline btn-primary">
               <i className="fa-solid fa-arrow-left mr-2"></i> Kembali ke
               Beranda
            </Link>
         </div>
      </div>
   )
}

export default Unauthorized
