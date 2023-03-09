/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				type: 'type 2.7s ease-out .8s infinite alternate both',
			  },
			  keyframes: {
				type: {
				  '0%': { transform: 'translateX(0ch)' },
				  '5%, 10%': { transform: 'translateX(2ch)' },
				  '15%, 20%': { transform: 'translateX(4ch)' },
				  '25%, 30%': { transform: 'translateX(6ch)' },
				  '35%, 40%': { transform: 'translateX(8ch)' },
				  '45%, 50%': { transform: 'translateX(10ch)' },
				  '55%, 60%': { transform: 'translateX(12ch)' },
				  '65%, 70%': { transform: 'translateX(14ch)' },
				  '75%, 80%': { transform: 'translateX(16ch)' },
				  '85%, 90%': { transform: 'translateX(18ch)' },
				  '95%, 100%': { transform: 'translateX(20ch)' },
				},
			  },
		  colors: {
			primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}
		  },
		  textColor: {
			primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}
		  }
		},
		fontFamily: {
		  'body': [
		'Inter', 
		'ui-sans-serif', 
		'system-ui', 
		'-apple-system', 
		'system-ui', 
		'Segoe UI', 
		'Roboto', 
		'Helvetica Neue', 
		'Arial', 
		'Noto Sans', 
		'sans-serif', 
		'Apple Color Emoji', 
		'Segoe UI Emoji', 
		'Segoe UI Symbol', 
		'Noto Color Emoji'
	  ],
		  'sans': [
		'Inter', 
		'ui-sans-serif', 
		'system-ui', 
		'-apple-system', 
		'system-ui', 
		'Segoe UI', 
		'Roboto', 
		'Helvetica Neue', 
		'Arial', 
		'Noto Sans', 
		'sans-serif', 
		'Apple Color Emoji', 
		'Segoe UI Emoji', 
		'Segoe UI Symbol', 
		'Noto Color Emoji'
	  ]
		}
	  },
	plugins: [],
}
