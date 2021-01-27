module.exports = {
    purge: {
        mode: 'all',
        content: [
            './src/**/*.js',
        ],
    },
    variants: {
        extend: {
        opacity: ['disabled'],
        }
    },
    theme: {
        fontFamily: {
            'title': ['Poppins', 'sans-serif'],
            'body': ['Poppins', 'sans-serif'],
        },
        fontWeight: {
            'title': '700',
            'body': '400'
        },
        extend: {
            colors: {
                dark: "#250000",
                light: "#ffffd7",
                primary: {
                    100: '#ff995f',
                    200: '#ff854b',
                    300: '#ff7137',
                    400: '#ed5d23',
                    500: '#D9490F',
                    600: '#c53500',
                    700: '#b12100',
                    800: '#9d0d00',
                    900: '#890000'
                },
                compliment: {
                    100: '#70fffa',
                    200: '#5ceee6',
                    300: '#48dad2',
                    400: '#34c6be',
                    500: '#20b2aa',
                    600: '#0c9e96',
                    700: '#008a82',
                    800: '#00766e',
                    900: '#00625a'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography'),],
}