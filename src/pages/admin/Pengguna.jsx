import Breadcrumbs from '../../components/admin/Breadcrumbs'
import Footer from '../../components/admin/Footer'
const Pengguna = () => {
   return (
      <>
         <div className="min-h-screen flex flex-col p-3">
            <div className="flex-grow">
               <Breadcrumbs />
               <div className="text-lg font-semibold p-2">Tables</div>
               <div className="container mx-auto mb-3 px-4">
                  <div className="flex justify-between items-center mb-4 gap-2">
                     <div className="relative w-full max-w-xs">
                        <input
                           type="text"
                           placeholder="Search..."
                           className="input input-bordered w-full pl-10"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M21 21l-4.35-4.35M15 10a5 5 0 10-10 0 5 5 0 0010 0z"
                              />
                           </svg>
                        </span>
                     </div>
                     <button className="btn btn-primary flex items-center gap-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                           />
                        </svg>
                        Add
                     </button>
                  </div>
                  <div className="overflow-x-auto">
                     <table className="table table-zebra">
                        <thead>
                           <tr className="bg-base-200 text-base font-semibold">
                              <th>#</th>
                              <th>Name</th>
                              <th>Job</th>
                              <th>Favorite Color</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td>Quality Control Specialist</td>
                              <td>Blue</td>
                           </tr>
                           <tr className="hover">
                              <th>2</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Red</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Pengguna
