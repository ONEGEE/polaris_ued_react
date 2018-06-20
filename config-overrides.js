const path = require('path')

module.exports = function override (config, env) {
	// do stuff with the webpack config...

	// 设置'@'为绝对路径src别名
	config.resolve.alias = {
		'@': path.join(__dirname, '.', 'src')
	}
	return config
}
