import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
   const location = useLocation()

   const pathSegments = location.pathname
      .split('/')
      .filter((segment) => segment)

   return (
      <div className="breadcrumbs text-sm pb-3 mx-2">
         <ul className="flex">
            {pathSegments.map((segment, index) => {
               const pathTo = `/${pathSegments.slice(0, index + 1).join('/')}`
               const formattedText = segment
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (c) => c.toUpperCase())

               return (
                  <li key={pathTo} className="flex items-center">
                     {index === pathSegments.length - 1 ? (
                        <span>{formattedText}</span>
                     ) : (
                        <Link to={pathTo}>{formattedText}</Link>
                     )}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default Breadcrumbs
