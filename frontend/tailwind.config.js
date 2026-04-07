import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#0F5C3F',
          'green-dark': '#1F7A5C',
        },
        secondary: {
          beige: '#E6E1D3',
        },
        accent: {
          orange: '#F4A261',
          yellow: '#E9C46A',
        },
        text: {
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(15, 92, 63, 0.1)',
        card: '0 8px 32px rgba(15, 92, 63, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
};
