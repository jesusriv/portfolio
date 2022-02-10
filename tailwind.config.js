module.exports = {
  mode: "jit",
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  theme: {    
    extend: {
    },  
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
