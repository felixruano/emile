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
                gray: {
                    50: '#F9F9F9',
                    100: '#F4F4F6',
                    200: '#EAEAF0',
                    300: '#E2E2EB',
                    400: '#D0D0DE',
                    500: '#A9A9B8',
                    600: '#82828F',
                    700: '#5F5F6C',
                    800: '#3E3E4F',
                    900: '#24242C',
                    primary: '#616161',
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