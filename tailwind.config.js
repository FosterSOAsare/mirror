/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./src/*.tsx", "./src/**/**/.tsx"],
	theme: {
		extend: {
			colors: {
				sec: "#0E0E0E",
				black: "#000000",
				icons: "#141B34",
			},
			fontFamily: {
				quicksand: ["'Quicksand', sans-serif"],
				inter: ["'Inter', sans-serif"],
			},
		},
	},
	plugins: [],
};
