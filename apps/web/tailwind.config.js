/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                fills: {
                    '0%': {
                        'background-position': 'left',
                    },
                    '100%': {
                        'background-position': 'right',
                    },
                },
            },
            animation: {
                'fills': 'fills 3s 1s forwards',
            },
        },
    },
    plugins: [],
}
