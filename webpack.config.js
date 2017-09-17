const path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		// path: "./app/temp/scripts", //Why did it stop working? Ask Simon
		path: path.resolve(__dirname, 'app/temp/scripts'),
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['env']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}