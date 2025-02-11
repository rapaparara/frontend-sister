import { useEffect, useState } from 'react'

const Login = () => {
   const [theme, setTheme] = useState('light')

   useEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
         setTheme(storedTheme)
      }
      document.documentElement.setAttribute(
         'data-theme',
         storedTheme || 'light'
      )
   }, [])

   return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
         <div className="card w-96 bg-base-100 shadow-xl p-6 border border-base-300">
            <div className="flex flex-col items-center">
               <img
                  src="/vite.svg"
                  alt="Website Logo"
                  className="w-16 h-16 mb-3 animate-bounce"
               />
               <h1 className="text-xl font-bold">My Website</h1>
            </div>
            <h2 className="text-2xl font-semibold text-center mt-2">
               Welcome Back
            </h2>
            <p className="text-sm text-center text-base-content/60">
               Login to continue
            </p>

            <div className="form-control mt-4">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:input-primary"
               />
            </div>

            <div className="form-control mt-4">
               <label className="label">
                  <span className="label-text">Password</span>
               </label>
               <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered focus:input-primary"
               />
            </div>

            <div className="form-control mt-6">
               <button className="btn btn-primary w-full">Login</button>
            </div>
         </div>
      </div>
   )
}

export default Login
