/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-color': 'hsl(219, 30%, 18%)',
      },

      backgroundColor: {
        'banner-color': 'hsl(219, 30%, 18%)',
        'footer-color': 'hsl(216, 53%, 9%)',
        'card-color': 'hsl(219, 30%, 18%)',
        'body-color': 'hsl(218, 28%, 13%)',
      },
      backgroundImage: {
        'banner-image': "url('../src/assets/images/bg-curvy-mobile.svg')",
        'md-banner-image': "url('../src/assets/images/bg-curvy-desktop.svg')",
      },

      margin: {
        spaceBottom: '4rem',
      },
      padding: {
        spaceBottom: '4rem',
      },
    },
  },
  plugins: [],
};
