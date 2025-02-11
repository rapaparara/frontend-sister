import Navbar from '../../components/landing/Navbar'
import AnimatedSection from '../../components/landing/AnimatedSection'

const LandingPage = () => {
   return (
      <div className="min-h-screen bg-base-200 text-base-content">
         <Navbar />

         {/* Hero Section */}
         <AnimatedSection>
            <div
               className="hero min-h-[120vh] bg-cover bg-center bg-fixed"
               style={{ backgroundImage: "url('/bg_home1.jpg')" }}
            >
               <div className="hero-overlay bg-black bg-opacity-50"></div>
               <div className="hero-content text-center text-white">
                  <div className="max-w-full">
                     <h1 className="text-3xl lg:text-5xl font-bold">
                        Sekolah Dasar Negeri 1 Kota Timur
                     </h1>
                     <p className="py-4 text-md lg:text-lg">
                        Jalan Pramuka No. 36, Heledulaa Utara, Kecamatan Kota
                        Timur.
                     </p>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* About Section */}
         <AnimatedSection delay={400}>
            <div id="about" className="container mx-auto py-12 px-6">
               <h2 className="text-3xl font-bold text-center mb-8">
                  Tentang Kami
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body">
                        <h3 className="font-semibold text-xl mb-4">
                           Visi dan Misi
                        </h3>
                        <p className="text-sm">
                           Visi: Menjadi sekolah unggulan yang menghasilkan
                           generasi berkarakter dan berprestasi.
                        </p>
                        <p className="text-sm mt-2">
                           Misi: Memberikan pendidikan berkualitas,
                           mengembangkan potensi siswa, dan membangun lingkungan
                           belajar yang inovatif.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body">
                        <h3 className="font-semibold text-xl mb-4">
                           Sejarah Sekolah
                        </h3>
                        <p className="text-sm">
                           Berdiri sejak tahun 1980, SDN 1 Kota Timur telah
                           menjadi salah satu sekolah dasar terbaik di wilayah
                           ini. Kami terus berkomitmen untuk memberikan
                           pendidikan terbaik bagi generasi muda.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Programs Section */}
         <AnimatedSection delay={600}>
            <div
               id="programs"
               className="container bg-base-300 min-w-full mx-auto py-12 px-6"
            >
               <h2 className="text-3xl font-bold text-center mb-8">
                  Program Unggulan
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body items-center text-center">
                        <div className="text-4xl">📚</div>
                        <h3 className="font-semibold text-xl mt-2">
                           Program Literasi
                        </h3>
                        <p className="text-sm">
                           Meningkatkan minat baca dan menulis siswa melalui
                           program literasi yang terstruktur.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body items-center text-center">
                        <div className="text-4xl">🧠</div>
                        <h3 className="font-semibold text-xl mt-2">
                           Program STEM
                        </h3>
                        <p className="text-sm">
                           Mengembangkan keterampilan sains, teknologi, teknik,
                           dan matematika melalui pembelajaran berbasis proyek.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body items-center text-center">
                        <div className="text-4xl">🎭</div>
                        <h3 className="font-semibold text-xl mt-2">
                           Program Seni dan Budaya
                        </h3>
                        <p className="text-sm">
                           Menumbuhkan kreativitas siswa melalui kegiatan seni
                           dan budaya.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Gallery Section */}
         <AnimatedSection delay={800}>
            <div id="gallery" className="container mx-auto py-12 px-6">
               <h2 className="text-3xl font-bold text-center mb-8">
                  Galeri Sekolah
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="/gallery1.jpg"
                        alt="Gallery 1"
                        className="w-full h-48 object-cover rounded-lg"
                     />
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="/gallery2.jpg"
                        alt="Gallery 2"
                        className="w-full h-48 object-cover rounded-lg"
                     />
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="/gallery3.jpg"
                        alt="Gallery 3"
                        className="w-full h-48 object-cover rounded-lg"
                     />
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Contact Section */}
         <AnimatedSection delay={1000}>
            <div id="contact" className="container mx-auto py-12 px-6">
               <h2 className="text-3xl font-bold text-center mb-8">
                  Hubungi Kami
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body">
                        <h3 className="font-semibold text-xl mb-4">
                           Alamat Sekolah
                        </h3>
                        <p className="text-sm">
                           Jalan Pramuka No. 36, Heledulaa Utara, Kecamatan Kota
                           Timur.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <div className="card-body">
                        <h3 className="font-semibold text-xl mb-4">
                           Informasi Kontak
                        </h3>
                        <p className="text-sm">
                           Email: info@sdn1kotatimur.sch.id
                        </p>
                        <p className="text-sm">Telepon: (0361) 1234567</p>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

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
