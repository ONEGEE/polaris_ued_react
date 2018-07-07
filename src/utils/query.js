export const query = (path, options) => {
	if (!path.match(/^\//)) {
		throw Error('every fetch path must be start with "/"')
	} else {
		let url = `http://localhost:8888/${path.slice(1)}`
		return fetch(url, options)
	}
}
