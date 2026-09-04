/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#990000',      // الأحمر القاني
        'primary-hover': '#B30000',
        secondary: '#808000',     // الزيتوني
        'secondary-light': '#A0A040',
        'dark-bg': '#000000',
        'card-bg': 'rgba(15, 15, 15, 0.85)',
        'border-color': 'rgba(255, 255, 255, 0.15)',
        'text-main': '#FFFFFF',
        'text-muted': '#9CA3AF',
      },
      borderRadius: {
        'br': '20px',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
