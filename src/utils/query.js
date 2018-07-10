export const query = (path, options) => {
	if (!path.match(/^\//)) {
		throw Error('Every fetch path must be start with "/"')
	} else {
		let url = `http://localhost:8888${path}`
		return fetch(url, options)
	}
}
