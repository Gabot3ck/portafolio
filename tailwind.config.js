/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
            300: '#91b4e8',
            400: '#2978c4',
            500: '#1877f2',
            600: '#044AA5',
            700: '#022D65',
        },
        'dark': {
          400:'#141c3a',
          500:'#111827',
        },
        'light': {
          500: '#f5f5f5',
          600: '#6b7280',
        },
        'alert': {
          500: '#ef4444',
        },
      }
    },
  },
  plugins: [],
}

