/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'canvas': '#FFFFFF',
        'obsidian': '#0a0a0a',
        'stone-gray': '#57534e',
        'slate-dark': '#1c1917',
        'sun-gold': '#ea580c',
        'sun-light': '#fff7ed',
        'warm-glow': '#fff1f2',
        'ocean-bright': '#f97316',
        'bronze': '#92400e',
        'deep-orange': '#c2410c',
      },
      fontFamily: {
        'roboto-thin': ['Roboto_100Thin'],
        'roboto-light': ['Roboto_300Light'],
        'roboto-regular': ['Roboto_400Regular'],
        'roboto-medium': ['Roboto_500Medium'],
        'roboto-bold': ['Roboto_700Bold'],
        'roboto-black': ['Roboto_900Black'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.02em',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0,0,0,0.03)',
        'float': '0 20px 40px -10px rgba(124, 45, 18, 0.1)',
        'sun-glow': '0 0 50px -10px rgba(255, 100, 0, 0.5)',
        'gold-aura': '0 4px 15px -3px rgba(234, 88, 12, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        'neon': '0 0 20px rgba(194, 65, 12, 0.6)',
      },
      animation: {
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        }
      },
    },
  },
  plugins: [],
}
