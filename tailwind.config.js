/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Space Grotesk', 'sans-serif'],
        },
        extend: {
            colors: {
                white: {
                    base: '#EDF2EF',
                    dark: '#DCE5DF',
                },
                primary: {
                    base: '#060C0F',
                    light: '#172F3A',
                },
                blue: '#1E9CC2',
            },
        },
    },
    plugins: [],
};
