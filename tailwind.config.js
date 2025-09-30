const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './packages/gatsby-theme-n21/**/*.js',
    './packages/gatsby-theme-n21/src/**/*.tsx',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
    },
    fontFamily: {
      sans: [
        'SUIT Variable',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'sans-serif',
      ],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          50: '#f4f8f9',
          100: '#daf1fa',
          200: '#b0e1f5',
          300: '#7cc2e7',
          400: '#469ed3',
          500: '#0075c1',
          600: '#2c62a8',
          700: '#254a85',
          800: '#1a325f',
          900: '#101e3e',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
