/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				brand: {
					blue: '#0C50CA',
					gray: '#5C5C5C'
				}
			},
		},
	},
	plugins: [],
}
