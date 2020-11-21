import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: 'soleil',
        heading: 'soleil',
        mono: 'soleil'
    },
    colors: {
        brand: {
            primary: {
                cardBg: '#FAF9FE',
                indigoPrimary: '#4F46E8',
                indigo: {
                    500: '#4F46E8',
                },
                indigoLighter: '#514D9B',
                indigoLight: '#C8C8D1',
                text: '#3A3A3A',
            },
            secondary: {
                coral: '#E84656',
                ceruleanDefault: '#46CBE8',
                cerulean: {
                    500: '#46CBE8',
                },
                canary: '#FCC73F',
                jadePrimary: '#27AE60',
                jade: {
                    500: '#27AE60',
                }
            },
            tertiary: {
                indigoDark: '#2F2A8B',
                canaryLight: '#FEE39F',
                canaryLighter: '#FFF9EC',
                canaryDark: '#32280D',
                cerulianDark: '#1C515D',
                cerulianLight: '#EDFAFD',
                coralLight: '#F1909A',
                coralLighter: '#FDEDEE',
                coralDark: '#BA3845',
                coralDarker: '#74232B',
            },
            gradient: {
                indigo:
                    'linear-gradient(83.47deg, #4F46E8 9.02%, #2A4E8B 90.81%)',
                light:
                    'inear-gradient(115.59deg, rgba(79, 70, 232, 0.03) 0.5%, rgba(79, 70, 232, 0.04) 100.5%)',
            },
        },
        indigo: {
            1000: '#2A2848',
            900: '#39356D',
            800: '#4B4699',
            700: '#534DC6',
            600: '#4F46E8',
            500: '#7972FB',
            400: '#ADA9FF',
            300: '#DCDAFF',
            200: '#ECECFF',
            100: '#F7F7FF',
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
        textPrimary: '#24242C',
        textSecondary: '#5F5F6C',
        textTertiary: '#82828F',
    },
    breakpoints: ["30em", "48em", "62em", "80em", "90em"],
    shadows: {
        brand: {
            base:
                '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
            md:
                '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
            lg:
                '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
            xl:
                '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
            '2xl': '0px 25px 50px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
        },
    },
});

export default theme;
