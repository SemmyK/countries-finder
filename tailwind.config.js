/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/react-tailwindcss-select/dist/index.esm.js',
	],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			xs: '375px',
			sm: '540px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			xxl: '1536px',
		},
		colors: {
			'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
			'very-dark-blue-text': 'hsl(200, 15%, 8%)',
			'dark-blue': 'hsl(209, 23%, 22%)',
			'dark-gray': 'hsl(0, 0%, 52%)',
			'light-gray-bg': 'hsl(0, 0%, 98%)',
			white: 'hsl(0, 0%, 100%)',
		},
	},
	plugins: [],
}
