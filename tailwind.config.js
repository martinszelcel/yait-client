const plugin = require('tailwindcss/plugin');

module.exports = {
  //mode: 'jit',
  purge: [
    // './public/**/*.html',
    // './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        panel: 'calc(100vh - 120px)',
        'panel-xl': 'calc(100vh - 32px)'
      },
      minHeight: {
        panel: '44rem'
      },
      fontSize: {
        '2xs': '.5rem'
      },
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      },
      animation: {
        show: 'show 0.2s ease-in-out',
      }
    },
  },
  variants: {
    extend: {
      margin: ['last', 'first'],
      opacity: ['dark'],
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'hr': { 
          opacity: theme('opacity.80'),
        },
        '.dark hr': { opacity: theme('opacity.20') },
        'select': {
          appearance: 'none',
          '-webkit-appearance': 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%226%200%2024%2024%22%3E%3Cpath%20fill%3D%22%239ba3af%22%20d%3D%22M7.41%2C8.58L12%2C13.17L16.59%2C8.58L18%2C10L12%2C16L6%2C10L7.41%2C8.58Z%22%20%2F%3E%3C%2Fsvg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: '24px'
        }
      })
    })
  ],
}
