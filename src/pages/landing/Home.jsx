import Navbar from '../../components/landing/Navbar'

const LandingPage = () => {
   return (
      <div className="min-h-screen bg-base-200 text-base-content">
         <Navbar />

         {/* Hero Section */}
         <div
            className="hero min-h-[80vh] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/bg_home1.jpg')" }}
         >
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
               <div className="max-w-full">
                  <h1 className="text-3xl lg:text-5xl font-bold">
                     Sekolah Dasar Negeri 1 Kota Timur
                  </h1>
                  <p className="py-4 text-md lg:text-lg">
                     Jalan Pramuka No. 36, Heledulaa Utara, Kecamatan Kota Timur.
                  </p>
                  {/* <button className="btn btn-primary mt-4">Lihat Informasi Terbaru</button> */}
               </div>
            </div>
         </div>

         {/* Features Section */}
         <div className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
               Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                  <div className="card-body items-center text-center">
                     <div className="text-4xl">🚀</div>
                     <h3 className="font-semibold text-xl mt-2">
                        Fast & Reliable
                     </h3>
                     <p className="text-sm">
                        Layanan yang cepat dan dapat diandalkan kapan saja.
                     </p>
                  </div>
               </div>
               <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                  <div className="card-body items-center text-center">
                     <div className="text-4xl">🔒</div>
                     <h3 className="font-semibold text-xl mt-2">
                        Secure & Safe
                     </h3>
                     <p className="text-sm">
                        Keamanan data Anda adalah prioritas kami.
                     </p>
                  </div>
               </div>
               <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                  <div className="card-body items-center text-center">
                     <div className="text-4xl">🎨</div>
                     <h3 className="font-semibold text-xl mt-2">Modern UI</h3>
                     <p className="text-sm">
                        Desain minimalis dan profesional untuk pengalaman
                        terbaik.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <footer className="footer footer-center p-6 bg-base-200 text-base-content">
            <p>
               Copyright © {new Date().getFullYear()} - All right reserved by
               Rapaparara
            </p>
         </footer>
      </div>
   )
}

export default LandingPage
