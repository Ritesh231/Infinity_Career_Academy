/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A2B6B',        // Rich patriotic navy text
          navyLight: '#2D3F8A',   // Lighter navy for accents
          gold: '#C8941A',        // Warm gold
          saffron: '#E05F00',     // Saffron orange
          cream: '#FFFBF2',       // Warm off-white background
          softBlue: '#EEF2FF',    // Light blue tint for cards
          warmGray: '#F5F0E8',    // Warm gray for sections
          border: '#E0D5C0',      // Soft border color
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
