import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            display: ['var(--font-display)', 'sans-serif'],
            text: ['var(--font-text)', 'sans-serif'],
        },

        colors: {
            'brand__blue-50': '#e8f4ff',
            'brand__blue-100': '#d5eaff',
            'brand__blue-200': '#b3d7ff',
            'brand__blue-300': '#85baff',
            'brand__blue-400': '#568eff',
            'brand__blue-500': '#2f62ff',
            'brand__blue-600': '#0c31ff',
            'brand__blue-700_base': '#1133ff',
            'brand__blue-800': '#0625cd',
            'brand__blue-900': '#102a9f',
            'brand__blue-950': '#0a175c',

            'brand__gray-base': '#d9d9d9',
            'brand__gray-100': '#1c1c1c',
            'brand__gray-200': '#242424',
            'brand__gray-300': '#3b3b3b',
            'brand__gray-400': '#4a4a4a',
            'brand__gray-500': '#636363',
            'brand__gray-600': '#919191',
            'brand__gray-700': '#b0b0b0',
            'brand__gray-800': '#c9c9c9',
            'brand__gray-900': '#d4d4d4',
            'brand__gray-950': '#e8e8e8',
            'brand__gray-1000': '#f2f2f2',

            'brand__system-green': '#34c759',
            'brand__system-red': '#ff3b30',
            'brand__system-cyan': '#00c7be',
            'brand__system-yellow': '#ffd60a',
            'brand__system-orange': '#ff9500',
        },
        extend: {},
    },
    plugins: [],
}
export default config
