module.exports = {
    purge: {
        mode: 'all',
        content: [
            './src/**/*.js',
        ],
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
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
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
            },
            transitionProperty: {
                'height': 'height',
            }
        }
    },
    plugins: [require('@tailwindcss/typography'),],
}