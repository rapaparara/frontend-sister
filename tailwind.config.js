/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
         },
      },
   },
   plugins: [daisyui],
   daisyui: {
      themes: ['light', 'dark'],
   },
}

