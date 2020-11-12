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
            colors: {
                indigo: {
                    '1000': '#2A2848',
                    '900': '#39356D',
                    '800': '#4B4699',
                    '700': '#534DC6',
                    '600': '#4F46E8',
                    '500': '#7972FB',
                    '400': '#ADA9FF',
                    '300': '#DCDAFF',
                    '200': '#ECECFF',
                    '100': '#F7F7FF',
                  },
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