module.exports = {
	devServer: {
		proxy: {
			'^/api|auth': {
				target: 'https://career.test:4263',
			}
		}
	}
}