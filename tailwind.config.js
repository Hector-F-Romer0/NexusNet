/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				navbar: "#5A8FCC",
				footer: "#2A4C73",
				card: "#E8F1FF",
				categoryTag: "#227FC2",
				serviceTag: "#2B5E99",
				keyTag: "#D0E3F1",
				keywordText: "#2C5877"
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
