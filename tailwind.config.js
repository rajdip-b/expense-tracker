/** @type {import('tailwindcss').Config} */
module.exports = {
    assets: ['./assets/fonts/'],
    content: ['./components/**/*.tsx', './screens/**/*.tsx', './App.tsx'],
    theme: {
        extend: {
            colors: {
                white: '#ECECEC',
                lightGray: '#bfbfbf',
                darkGray: '#57565E',
                black: '#09080C',
                brown: '#4B3430',
                lightGreen: '#ADCCB6',
                darkGreen: '#7D8A5F',
            },
        },
    },
    plugins: [],
};
