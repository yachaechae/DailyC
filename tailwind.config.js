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
			height: {
				27: "27px",
				75: "75px",
			},
			colors: {
				orange: "#FF9148",
				deepOrange: "#FF7F5A",
				lightOrange: "#FFE8C7",
				leaf: "#69D283",
				orangeTop: '#00C67F"',
			},
		},
	},
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				".custom-category-item": {
					"@apply max-w-[200px] w-full text-center cursor-pointer relative text-[#f49608] py-2 px-0.5 hover:bg-[#ffe8c7] hover:rounded-[25px]":
						"",
				},
				".custom-category-item::after": {
					"@apply absolute top-1/2 -right-6 translate-y-1/2 h-[27px] content-['']  border-orange": "",
				},
				".custom-category-item:last-child::after": {
					" @apply border-0": "",
				},
			});
		},
	],
};
