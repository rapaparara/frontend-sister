import Navbar from '../../components/landing/Navbar'
import AnimatedSection from '../../components/landing/AnimatedSection'

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

         {/* Visi Misi Section */}
         <AnimatedSection delay={300}>
            <div
               id="visi-misi"
               className="container bg-emerald-600 text-base-100 min-w-full mx-auto py-16 px-6"
            >
               <h2 className="text-4xl font-bold text-center mb-12">
                  Visi dan Misi
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Visi */}
                  <div className="bg-emerald-500 rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300">
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
                  <div className="bg-emerald-500 rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300">
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
         </AnimatedSection>

         {/* Sambutan Section */}
         <AnimatedSection delay={200}>
            <div id="sambutan" className="container mx-auto py-12 px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-base-100 rounded-xl shadow-md p-6 my-8">
                     <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Gambar di kiri */}
                        <img
                           src="https://randomuser.me/api/portraits/men/57.jpg"
                           alt="Kepala Sekolah"
                           className="w-40 h-40 md:w-56 md:h-72 object-cover rounded-xl shadow-sm"
                        />

                        {/* Teks di kanan */}
                        <div className="flex-1">
                           <h3 className="text-3xl font-bold text-emerald-600 mb-4">
                              Sambutan Kepala Sekolah
                           </h3>
                           <p className="text-gray-700 leading-relaxed text-justify text-md">
                              Berdiri sejak tahun 1980, SDN 1 Kota Timur telah
                              menjadi salah satu sekolah dasar terbaik di
                              wilayah ini. Kami terus berkomitmen untuk
                              memberikan pendidikan terbaik bagi generasi muda.
                              Kami percaya bahwa setiap anak memiliki potensi
                              besar, dan tugas kami adalah membimbing serta
                              mengembangkannya menjadi individu yang berkarakter
                              dan berprestasi.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="max-w-4xl mx-auto py-8">
                     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-emerald-500 text-white py-4 px-6">
                           <h2 className="text-2xl font-semibold">
                              Pengumuman
                           </h2>
                        </div>

                        <div className="p-6">
                           <ul className="space-y-4">
                              {newsList.map((news, index) => (
                                 <li
                                    key={index}
                                    className="flex items-center gap-4 hover:bg-gray-100 rounded-lg p-3 transition duration-200"
                                 >
                                    <img
                                       src={news.img}
                                       alt={news.alt}
                                       className="w-14 h-14 object-cover rounded-lg"
                                    />
                                    <p className="flex-1 text-base font-medium text-gray-700">
                                       {news.title}
                                    </p>
                                 </li>
                              ))}
                           </ul>

                           <div className="mt-6 text-center">
                              <a
                                 href="#"
                                 className="text-emerald-500 font-semibold text-sm hover:underline"
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

         {/* Alumni Section */}
         <AnimatedSection delay={300}>
            <div
               id="alumni"
               className="container bg-emerald-500 text-base-100 min-w-full mx-auto py-12 px-6"
            >
               <h2 className="text-3xl font-bold text-center mb-8">
                  Alumni Kami
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base-content">
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
                     {
                        name: 'Daniel Pratama',
                        profession: 'Doctor at RSUD Jakarta',
                        photo: 'https://randomuser.me/api/portraits/men/47.jpg',
                        quote: 'Saya belajar nilai penting ketekunan dan empati dari masa sekolah di sini.',
                     },
                     {
                        name: 'Eka Sari',
                        profession: 'Architect at SariDesign',
                        photo: 'https://randomuser.me/api/portraits/women/48.jpg',
                        quote: 'Lingkungan belajar yang kreatif dan suportif menjadi kunci keberhasilan saya.',
                     },
                  ].map((alumni, index) => (
                     <div
                        key={index}
                        className="card bg-base-100 shadow-xl p-6 border border-base-300 text-center flex flex-col items-center"
                     >
                        <img
                           src={alumni.photo}
                           alt={alumni.name}
                           className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold text-xl">{alumni.name}</h3>
                        <p className="text-sm text-gray-500">
                           {alumni.profession}
                        </p>
                        <p className="mt-4 text-sm italic text-gray-600">
                           "{alumni.quote}"
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </AnimatedSection>

         {/* Gallery Section */}
         <AnimatedSection delay={300}>
            <div id="gallery" className="container  mx-auto py-12 px-6">
               <h2 className="text-3xl font-bold text-center mb-8">
                  Galeri Sekolah
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="Gallery 1"
                        className="w-full h-48 object-cover rounded-lg"
                     />
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="Gallery 2"
                        className="w-full h-48 object-cover rounded-lg"
                     />
                  </div>
                  <div className="card bg-base-100 shadow-lg p-6 border border-base-300">
                     <img
                        src="https://picsum.photos/seed/picsum/200/300"
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
               Sister
            </p>
         </footer>
      </div>
   )
}

export default LandingPage
