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
        spaceBottom: '20rem',
      },
      padding: {
        spaceBottom: '20rem',
      },

      gridTemplateColumns: {
        footer: '1fr 1fr 10rem 10rem 15rem',
      },
    },
  },
  plugins: [],
};
