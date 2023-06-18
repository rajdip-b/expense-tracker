/** @type {import('tailwindcss').Config} */
module.exports = {
    assets: ['./assets/fonts/'],
    content: ['./components/**/*.tsx', './screens/**/*.tsx', './App.tsx'],
    theme: {
        extend: {
            colors: {
                lightGray: '#ede9f0',
                lightBrown: '#f6b1a2',
                lightPurple: '#c6b6fb',
                mediumPurple: '#b8aaf8',
                teal: '#9cadbf',
                darkPurple: '#a84d92',
                darkBlue: '#3c48d7',
                brown: '#4B3430',
            },
        },
    },
    plugins: [],
};
