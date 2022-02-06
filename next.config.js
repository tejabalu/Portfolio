module.exports = {
	images: {
		domains: [
			"dl.airtable.com",
			"images.unsplash.com",
			"s3.us-west-2.amazonaws.com",
			"raw.githubusercontent.com",
		],
	},

	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
		],

		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, loader: "source-map-loader" },
		],
	},
};
