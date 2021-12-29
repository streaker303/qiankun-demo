module.exports = {
	devServer: {
		port: 10000,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		disableHostCheck: true
	},
	configureWebpack: {
		output: {
			library: 'vueApp',
			libraryTarget: 'umd'
		}
	}
}
