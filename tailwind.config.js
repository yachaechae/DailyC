/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1200px",
		},

		extend: {
			colors: {
				orange: "#FF9148",
				deepOrange: "#FF7F5A",
				lightOrange: "#FFE8C7",
				leaf: "#69D283",
				orangeTop: '#00C67F"',
				gold: "#ffcd49",
				silver: "#D9D9D9",
				bronze: "#9C7548",
			},
		},
	},
	plugins: [],
};
