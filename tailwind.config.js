/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                secondary: "#800000", // Deep Maroon/Red
                accent: "#D4AF37", // Gold
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shine': 'shine 2s linear infinite',
            },
            keyframes: {
                shine: {
                    '0%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                    '100%': { opacity: '0.5' },
                }
            }
        },
    },
    plugins: [],
}
