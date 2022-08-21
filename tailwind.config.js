/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      container: {
         center: true,
         padding: '16px',
      },
      extend: {
         colors: {
            primary: '#0e7490',
            dark: '#1e293b',
         },
         screens: {
            '2xl': '1320px',
         },
      },
   },
   plugins: [],
};
