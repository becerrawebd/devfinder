/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      gridTemplateRows: {
        'mobile': 'repeat(4,auto)',
        'tablet': 'repeat(3,auto) 100px'
      },
      gridTemplateColumns: {
        'mobile': '1fr 2fr',
        'desktop': '1fr 3fr'
      },
      colors: {
        'darkest-blue': 'hsl(222, 40%, 13%)',
        'dark-blue': 'hsl(224, 40%, 20%)',
        'light-blue': 'hsl(212, 100%, 40%)',
        'lighter-blue': 'hsl(211, 100%, 50%)',
        'not-available': 'hsl(224, 11%, 60%)',
        'light-gray': 'hsl(224, 11%, 60%)'
      }
    },
  },
  plugins: [],
}

