/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sbr: {
          orange: '#FF5722',
          'orange-hover': '#E64A19',
          'orange-light': '#FF8A65',
          'orange-50': '#FFF5EE',
          'orange-100': '#FFE8DD',
          blue: '#0040FF',
          'blue-hover': '#0033CC',
          'blue-dark': '#002699',
          'blue-50': '#EEF4FF',
          'blue-100': '#DBE7FE',
          dark: '#0F172A',
          slate: '#1E293B',
          muted: '#64748B',
          light: '#F8FAFC',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sbr-card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'sbr-hover': '0 20px 40px -10px rgba(0, 64, 255, 0.15)',
        'sbr-orange': '0 10px 25px -5px rgba(255, 87, 34, 0.35)',
      }
    },
  },
  plugins: [],
}
