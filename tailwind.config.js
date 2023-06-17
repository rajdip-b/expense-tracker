/** @type {import('tailwindcss').Config} */
module.exports = {
    assets: ['./assets/fonts/'],
    content: ['./components/**/*.tsx', './screens/**/*.tsx', './App.tsx'],
    theme: {
        extend: {
            colors: {
                lightGray: '#bfbfbf',
                darkGray: '#57565E',
                black: '#191A2D',
                brown: '#4B3430',
                lightGreen: '#ADCCB6',
                darkGreen: '#7D8A5F',
                textGrey: '#8F8D95'
            },
        },
    },
    plugins: [],
};
