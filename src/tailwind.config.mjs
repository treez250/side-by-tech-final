/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '300' }],
                sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '300' }],
                base: ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em', fontWeight: '300' }],
                lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.03em', fontWeight: '300' }],
                xl: ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.03em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.7', letterSpacing: '0.04em', fontWeight: '400' }],
                '3xl': ['1.875rem', { lineHeight: '1.8', letterSpacing: '0.04em', fontWeight: '400' }],
                '4xl': ['2.25rem', { lineHeight: '1.8', letterSpacing: '0.05em', fontWeight: '500' }],
                '5xl': ['3rem', { lineHeight: '1.9', letterSpacing: '0.05em', fontWeight: '500' }],
                '6xl': ['3.75rem', { lineHeight: '1.9', letterSpacing: '0.06em', fontWeight: '600' }],
                '7xl': ['4.5rem', { lineHeight: '2', letterSpacing: '0.06em', fontWeight: '600' }],
                '8xl': ['6rem', { lineHeight: '2', letterSpacing: '0.07em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '2', letterSpacing: '0.07em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "lato-light"
            },
            colors: {
                'soft-gold': '#BDBDBD',
                destructive: '#D32F2F',
                'destructive-foreground': '#FFFFFF',
                background: '#F8F8F8',
                secondary: '#A9A9A9',
                foreground: '#2E3138',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#2E3138'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
