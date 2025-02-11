const DynamicTable = ({ columns, data, onSearch, onAdd, actions }) => {
   return (
      <div className="container mx-auto mb-3 px-4">
         {/* Search & Add Button */}
         <div className="flex justify-between items-center mb-4 gap-2">
            <div className="relative w-full max-w-xs">
               <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered w-full pl-10"
                  onChange={(e) => onSearch && onSearch(e.target.value)}
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
            <button
               className="btn btn-primary flex items-center gap-2"
               onClick={onAdd}
            >
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

         {/* Table */}
         <div className="">
            <table className="table table-zebra">
               <thead>
                  <tr className="bg-base-200 text-base font-semibold">
                     <th>#</th>
                     {columns.map((col, index) => (
                        <th key={index}>{col.label}</th>
                     ))}
                     {actions && <th>Aksi</th>}
                  </tr>
               </thead>
               <tbody>
                  {data.length > 0 ? (
                     data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                           <th>{rowIndex + 1}</th>
                           {columns.map((col, colIndex) => (
                              <td key={colIndex}>{row[col.field]}</td>
                           ))}
                           {actions && <td>{actions(row)}</td>}
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td
                           colSpan={columns.length + 1}
                           className="text-center py-4"
                        >
                           No data available
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default DynamicTable
