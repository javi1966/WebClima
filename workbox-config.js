module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,ttf,woff,jpg,png,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};