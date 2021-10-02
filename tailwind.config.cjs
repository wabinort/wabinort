const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				"funky-gray-neutral": '#88837c',
				"funky-gray-dark": '#1e1c1a',
			}
		},
	},
	plugins: [],
};

module.exports = config;
