import Navbar from '../../components/landing/Navbar'
import AnimatedSection from '../../components/landing/AnimatedSection'
import { motion } from 'framer-motion'

const LandingPage = () => {
   const newsList = [
      {
         img: 'bg_home1.jpg',
         alt: 'Berita 1',
         title: 'PENILAIAN AKHIR SEMESTER GANJIL T.P. 2024/2025',
      },
      {
         img: 'bg_home1.jpg',
         alt: 'Berita 2',
         title: 'PENILAIAN TENGAH SEMESTER GANJIL T.P. 2024/2025',
      },
      {
         img: 'bg_home1.jpg',
         alt: 'Berita 3',
         title: 'REV. JADWAL KBM SEMESTER GANJIL TP. 2024/2025 DAN DENAH...',
      },
      {
         img: 'bg_home1.jpg',
         alt: 'Berita 4',
         title: 'PENGUMUMAN PEMBAGIAN KELAS X/ FASE E',
      },
   ]

   return (
      <div className="min-h-screen bg-gray-50 text-base-content">
         <Navbar />

         {/* Hero Section */}
         <AnimatedSection>
            <div
               className="hero min-h-[80vh] bg-cover bg-center relative overflow-hidden"
               style={{ backgroundImage: "url('/bg_home1.jpg')" }}
            >
               <div className="hero-overlay bg-gradient-to-r from-emerald-900/80 to-black/50"></div>
               <div className="hero-content text-center text-white z-10 py-20">
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="max-w-full"
                  >
                     <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-shadow-lg">
                        Sekolah Dasar Negeri 1 Kota Timur
                     </h1>
                     <p className="py-4 text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
                        Jalan Pramuka No. 36, Heledulaa Utara, Kecamatan Kota
                        Timur.
                     </p>
                     <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href="#visi-misi" className="btn btn-primary px-8 py-3 rounded-full">Visi & Misi</a>
                        <a href="#contact" className="btn btn-outline btn-primary text-white border-white px-8 py-3 rounded-full">Hubungi Kami</a>
                     </div>
                  </motion.div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute bottom-0 left-0 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                     <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                  </svg>
               </div>
            </div>
         </AnimatedSection>

         {/* Quick Stats Section */}
         <AnimatedSection delay={150}>
            <div className="container mx-auto -mt-16 px-6 z-20 relative">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                     { number: "30+", label: "Guru Berpengalaman", icon: "👨‍🏫" },
                     { number: "95%", label: "Tingkat Kelulusan", icon: "🎓" },
                     { number: "250+", label: "Siswa Aktif", icon: "👨‍👩‍👧‍👦" },
                     { number: "42", label: "Tahun Berdiri", icon: "🏫" },
                  ].map((stat, index) => (
                     <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                           <div className="text-4xl mb-2">{stat.icon}</div>
                           <h3 className="text-3xl font-bold text-emerald-600">{stat.number}</h3>
                           <p className="text-gray-600">{stat.label}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </AnimatedSection>

         {/* Visi Misi Section */}
         <AnimatedSection delay={300}>
            <div
               id="visi-misi"
               className="container min-w-full mx-auto py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white"
            >
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <span className="inline-block px-3 py-1 bg-emerald-500 bg-opacity-30 rounded-full text-sm font-semibold mb-3">IDENTITAS KAMI</span>
                     <h2 className="text-4xl font-bold mb-4">Visi dan Misi</h2>
                     <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     {/* Visi */}
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/20 transition duration-300">
                        <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                           <span className="text-2xl">👁️</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-6">
                           Visi
                        </h3>
                        <p className="leading-relaxed text-justify text-md">
                           Menjadi sekolah unggulan yang menghasilkan generasi
                           berkarakter, berprestasi, serta mampu bersaing di
                           tingkat nasional maupun global dengan berlandaskan
                           nilai-nilai luhur bangsa.
                        </p>
                     </div>

                     {/* Misi */}
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/20 transition duration-300">
                        <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                           <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-6">
                           Misi
                        </h3>
                        <ul className="list-disc list-inside leading-relaxed text-md space-y-4">
                           <li>
                              Mengembangkan potensi peserta didik secara optimal
                              melalui pembelajaran aktif, kreatif, dan inovatif.
                           </li>
                           <li>
                              Menanamkan nilai-nilai keagamaan, moral, dan
                              kebangsaan dalam kehidupan sehari-hari.
                           </li>
                           <li>
                              Meningkatkan prestasi akademik dan non-akademik siswa
                              melalui berbagai program unggulan.
                           </li>
                           <li>
                              Menciptakan lingkungan sekolah yang aman, nyaman, dan
                              ramah anak.
                           </li>
                           <li>
                              Memanfaatkan teknologi informasi untuk menunjang
                              proses pembelajaran dan manajemen sekolah.
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Sambutan Section */}
         <AnimatedSection delay={200}>
            <div id="sambutan" className="container mx-auto py-20 px-6 bg-gray-50">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">SAMBUTAN</span>
                     <h2 className="text-4xl font-bold text-gray-800 mb-4">Dari Kepala Sekolah</h2>
                     <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                     <div className="md:col-span-3 bg-white rounded-xl shadow-xl p-8 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                           {/* Gambar di kiri */}
                           <div className="relative">
                              <div className="absolute -inset-1 bg-emerald-500 rounded-xl transform -rotate-6 z-0"></div>
                              <img
                                 src="https://randomuser.me/api/portraits/men/57.jpg"
                                 alt="Kepala Sekolah"
                                 className="relative z-10 w-40 h-40 md:w-56 md:h-72 object-cover rounded-xl shadow-sm"
                              />
                           </div>

                           {/* Teks di kanan */}
                           <div className="flex-1">
                              <h3 className="text-3xl font-bold text-emerald-600 mb-4">
                                 Sambutan Kepala Sekolah
                              </h3>
                              <p className="text-gray-700 leading-relaxed text-justify text-md mb-4">
                                 Berdiri sejak tahun 1980, SDN 1 Kota Timur telah
                                 menjadi salah satu sekolah dasar terbaik di
                                 wilayah ini. Kami terus berkomitmen untuk
                                 memberikan pendidikan terbaik bagi generasi muda.
                              </p>
                              <p className="text-gray-700 leading-relaxed text-justify text-md">
                                 Kami percaya bahwa setiap anak memiliki potensi
                                 besar, dan tugas kami adalah membimbing serta
                                 mengembangkannya menjadi individu yang berkarakter
                                 dan berprestasi.
                              </p>
                              <div className="mt-6">
                                 <p className="font-bold text-emerald-700">Drs. Ahmad Santoso, M.Pd.</p>
                                 <p className="text-sm text-gray-500">Kepala Sekolah</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="md:col-span-2">
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                           <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6">
                              <h2 className="text-2xl font-semibold">
                                 Pengumuman Terbaru
                              </h2>
                           </div>

                           <div className="p-6">
                              <ul className="space-y-4">
                                 {newsList.map((news, index) => (
                                    <li
                                       key={index}
                                       className="flex items-center gap-4 hover:bg-gray-100 rounded-lg p-3 transition duration-200 cursor-pointer"
                                    >
                                       <div className="relative min-w-14 h-14">
                                          <div className="absolute inset-0 bg-emerald-200 rounded-lg transform rotate-3"></div>
                                          <img
                                             src={news.img}
                                             alt={news.alt}
                                             className="absolute inset-0 w-14 h-14 object-cover rounded-lg"
                                          />
                                       </div>
                                       <p className="flex-1 text-base font-medium text-gray-700">
                                          {news.title}
                                       </p>
                                    </li>
                                 ))}
                              </ul>

                              <div className="mt-6 text-center">
                                 <a
                                    href="#"
                                    className="inline-block px-6 py-2 bg-emerald-100 text-emerald-600 rounded-full font-semibold text-sm hover:bg-emerald-200 transition duration-300"
                                 >
                                    Baca Selengkapnya &raquo;
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Alumni Section */}
         <AnimatedSection delay={300}>
            <div
               id="alumni"
               className="container min-w-full mx-auto py-20 px-6 bg-gradient-to-br from-emerald-50 to-emerald-100"
            >
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">ALUMNI</span>
                     <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Kisah Sukses Alumni Kami
                     </h2>
                     <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                     <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Para alumni kami telah meraih kesuksesan di berbagai bidang dan terus menginspirasi generasi penerus.
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Alumni Card */}
                     {[
                        {
                           name: 'Amanda Putri',
                           profession: 'Software Engineer at Google',
                           photo: 'https://randomuser.me/api/portraits/women/44.jpg',
                           quote: 'Pendidikan di sini mengubah hidup saya. Tidak hanya cerdas, tapi juga berkarakter.',
                        },
                        {
                           name: 'Bima Saputra',
                           profession: 'Data Scientist at Tokopedia',
                           photo: 'https://randomuser.me/api/portraits/men/45.jpg',
                           quote: 'Belajar di sini memberi saya fondasi kuat untuk berkarier di bidang teknologi.',
                        },
                        {
                           name: 'Citra Ayuningtyas',
                           profession: 'Entrepreneur & Founder of CitraCraft',
                           photo: 'https://randomuser.me/api/portraits/women/46.jpg',
                           quote: 'Dukungan para guru membuat saya berani bermimpi besar dan mewujudkannya.',
                        },
                     ].map((alumni, index) => (
                        <div
                           key={index}
                           className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-5px] transition-transform duration-300"
                        >
                           <div className="p-6 flex flex-col items-center">
                              <div className="relative w-24 h-24 mb-6">
                                 <div className="absolute inset-0 bg-emerald-300 rounded-full transform -translate-x-1 translate-y-1"></div>
                                 <img
                                    src={alumni.photo}
                                    alt={alumni.name}
                                    className="absolute inset-0 w-24 h-24 rounded-full object-cover border-4 border-white"
                                 />
                              </div>
                              <h3 className="font-bold text-xl text-gray-800">{alumni.name}</h3>
                              <p className="text-sm text-emerald-600 font-medium mb-4">
                                 {alumni.profession}
                              </p>
                              <p className="text-gray-600 italic text-center">
                                 "{alumni.quote}"
                              </p>
                           </div>
                           <div className="bg-emerald-50 py-3 px-6 text-center">
                              <a href="#" className="text-emerald-600 text-sm font-semibold hover:text-emerald-800">Lihat Profil</a>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  <div className="text-center mt-12">
                     <a href="#" className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition duration-300 shadow-lg">
                        Lihat Semua Alumni
                     </a>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Gallery Section */}
         <AnimatedSection delay={300}>
            <div id="gallery" className="container mx-auto py-20 px-6">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">GALERI</span>
                     <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Galeri Sekolah
                     </h2>
                     <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                     <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Dokumentasi kegiatan dan fasilitas yang ada di sekolah kami.
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="grid gap-4">
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic1/800/600"
                              alt="Gallery 1"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic2/800/600"
                              alt="Gallery 2"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                     </div>
                     <div className="grid gap-4">
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic3/800/600"
                              alt="Gallery 3"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic4/800/600"
                              alt="Gallery 4"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                     </div>
                     <div className="grid gap-4">
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic5/800/600"
                              alt="Gallery 5"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic6/800/600"
                              alt="Gallery 6"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                     </div>
                     <div className="grid gap-4">
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic7/800/600"
                              alt="Gallery 7"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                        <div className="overflow-hidden rounded-xl shadow-lg group">
                           <img
                              src="https://picsum.photos/seed/pic8/800/600"
                              alt="Gallery 8"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Contact Section */}
         <AnimatedSection delay={300}>
            <div id="contact" className="container min-w-full mx-auto py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <span className="inline-block px-3 py-1 bg-emerald-500 bg-opacity-30 rounded-full text-sm font-semibold mb-3">KONTAK</span>
                     <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
                     <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 text-center">
                        <div className="bg-white text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                           <span className="text-2xl">📍</span>
                        </div>
                        <h3 className="font-semibold text-xl mb-4">Alamat</h3>
                        <p className="text-white/80">
                           Jalan Pramuka No. 36, Heledulaa Utara, Kecamatan Kota Timur.
                        </p>
                     </div>
                     
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 text-center">
                        <div className="bg-white text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                           <span className="text-2xl">📞</span>
                        </div>
                        <h3 className="font-semibold text-xl mb-4">Telepon</h3>
                        <p className="text-white/80">
                           (0361) 1234567
                        </p>
                     </div>
                     
                     <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 text-center">
                        <div className="bg-white text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                           <span className="text-2xl">✉️</span>
                        </div>
                        <h3 className="font-semibold text-xl mb-4">Email</h3>
                        <p className="text-white/80">
                           info@sdn1kotatimur.sch.id
                        </p>
                     </div>
                  </div>
                  
                  <div className="mt-16 text-center">
                     <a href="#" className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-emerald-100 transition duration-300 shadow-lg">
                        Kirim Pesan
                     </a>
                  </div>
               </div>
            </div>
         </AnimatedSection>

         {/* Footer */}
         <footer className="footer footer-center p-10 bg-gray-900 text-white">
            <div className="container mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
                  <div className="text-center md:text-left">
                     <h3 className="text-xl font-bold mb-4">SDN 1 Kota Timur</h3>
                     <p className="text-gray-400 text-sm">
                        Mewujudkan pendidikan berkualitas untuk semua anak Indonesia.
                     </p>
                  </div>
                  
                  <div className="text-center">
                     <h3 className="text-xl font-bold mb-4">Link Cepat</h3>
                     <div className="flex flex-col gap-2">
                        <a href="#" className="text-gray-400 hover:text-white transition">Beranda</a>
                        <a href="#visi-misi" className="text-gray-400 hover:text-white transition">Visi & Misi</a>
                        <a href="#gallery" className="text-gray-400 hover:text-white transition">Galeri</a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition">Kontak</a>
                     </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                     <h3 className="text-xl font-bold mb-4">Sosial Media</h3>
                     <div className="flex justify-center md:justify-end gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition">
                           <span className="text-xl">📘</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition">
                           <span className="text-xl">📸</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition">
                           <span className="text-xl">🐦</span>
                        </a>
                     </div>
                  </div>
               </div>
               
               <div className="pt-6">
                  <p className="text-gray-400">
                     Copyright © {new Date().getFullYear()} - All right reserved by Sister
                  </p>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default LandingPage
