import { useEffect, useState } from 'react'

const ThemeSelector = () => {
   const themes = ['light', 'dark']
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
   }, [theme])

   return (
      <select
         className="select select-bordered select-sm w-xs rounded-lg hover:bg-base-200 transition"
         value={theme}
         onChange={(e) => setTheme(e.target.value)}
      >
         {themes.map((t) => (
            <option key={t} value={t}>
               {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
         ))}
      </select>
   )
}

export default ThemeSelector
