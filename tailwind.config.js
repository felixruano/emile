const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['soleil', ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                'secondary-jade': '#35656D',
            },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        backgroundColor: ['responsive', 'odd', 'hover', 'focus'],
    },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}