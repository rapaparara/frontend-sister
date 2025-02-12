import Navbar from '../../components/landing/Navbar'
import AnimatedSection from '../../components/landing/AnimatedSection'

const LandingPage = () => {
   return (
      <div className="min-h-screen bg-base-200 text-base-content">
         <Navbar />

         {/* Hero Section */}
         <AnimatedSection>
            <div
               className="hero min-h-[60vh] lg:min-h-[120vh] bg-cover bg-center bg-fixed"
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

         {/* Sambutan Section */}
         <AnimatedSection delay={200}>
            <div id="sambutan" className="container mx-auto py-12 px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                     <div className="flex items-start">
                        {/* Gambar di kiri */}
                        <img
                           src="/image_kepsek.jpg"
                           alt="Kepala Sekolah"
                           className="w-48 h-auto max-h-64 object-cover mr-4 rounded-lg"
                        />

                        {/* Teks di kanan gambar */}
                        <div className="flex-1">
                           <h3 className="font-bold text-2xl mb-3">
                              Sambutan Kepala Sekolah
                           </h3>
                           <p className="text-md">
                              Berdiri sejak tahun 1980, SDN 1 Kota Timur telah
                              menjadi salah satu sekolah dasar terbaik di
                              wilayah ini. Kami terus berkomitmen untuk
                              memberikan pendidikan terbaik bagi generasi
                              muda.Berdiri sejak tahun 1980, SDN 1 Kota Timur
                              telah menjadi salah satu sekolah dasar terbaik di
                              wilayah ini. Kami terus berkomitmen untuk
                              memberikan pendidikan terbaik bagi generasi
                              muda.Berdiri sejak tahun 1980, SDN 1 Kota Timur
                              telah menjadi salah satu sekolah dasar terbaik di
                              wilayah ini. Kami terus berkomitmen untuk
                              memberikan pendidikan terbaik bagi generasi muda.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-md">
                     <div className="card bg-base-100 shadow-md border border-base-300">
                        <div className="bg-primary text-white px-4 py-3 rounded-t-lg">
                           <h2 className="text-xl font-bold">Pengumuman</h2>
                        </div>

                        <div className="p-4">
                           <ul className="divide-y divide-base-300">
                              <li>
                                 <a
                                    href="#"
                                    className="flex items-center gap-4 py-3 hover:bg-base-200 rounded-lg px-2"
                                 >
                                    <img
                                       src="bg_home1.jpg"
                                       alt="Berita 1"
                                       className="w-16 h-16 object-cover rounded-md border border-base-300"
                                    />
                                    <p className="flex-1 text-sm font-medium text-base-content">
                                       PENILAIAN AKHIR SEMESTER GANJIL T.P.
                                       2024/2025
                                    </p>
                                 </a>
                              </li>

                              <li>
                                 <a
                                    href="#"
                                    className="flex items-center gap-4 py-3 hover:bg-base-200 rounded-lg px-2"
                                 >
                                    <img
                                       src="bg_home1.jpg"
                                       alt="Berita 2"
                                       className="w-16 h-16 object-cover rounded-md border border-base-300"
                                    />
                                    <p className="flex-1 text-sm font-medium text-base-content">
                                       PENILAIAN TENGAH SEMESTER GANJIL T.P.
                                       2024/2025
                                    </p>
                                 </a>
                              </li>

                              <li>
                                 <a
                                    href="#"
                                    className="flex items-center gap-4 py-3 hover:bg-base-200 rounded-lg px-2"
                                 >
                                    <img
                                       src="bg_home1.jpg"
                                       alt="Berita 3"
                                       className="w-16 h-16 object-cover rounded-md border border-base-300"
                                    />
                                    <p className="flex-1 text-sm font-medium text-base-content">
                                       REV. JADWAL KBM SEMESTER GANJIL TP.
                                       2024/2025 DAN DENAH...
                                    </p>
                                 </a>
                              </li>

                              <li>
                                 <a
                                    href="#"
                                    className="flex items-center gap-4 py-3 hover:bg-base-200 rounded-lg px-2"
                                 >
                                    <img
                                       src="bg_home1.jpg"
                                       alt="Berita 4"
                                       className="w-16 h-16 object-cover rounded-md border border-base-300"
                                    />
                                    <p className="flex-1 text-sm font-medium text-base-content">
                                       PENGUMUMAN PEMBAGIAN KELAS X/ FASE E
                                    </p>
                                 </a>
                              </li>
                           </ul>

                           <div className="mt-4">
                              <a
                                 href="#"
                                 className="text-primary font-semibold text-sm hover:underline"
                              >
                                 Baca Selengkapnya &raquo;
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Programs Section */}
         <AnimatedSection delay={300}>
            <div
               id="programs"
               className="container bg-primary text-base-100 min-w-full mx-auto py-12 px-6"
            >
               <h2 className="text-3xl font-bold text-center mb-8">
                  Program Unggulan
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base-content">
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
         <AnimatedSection delay={300}>
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
         <AnimatedSection delay={300}>
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
