export const query = (path, options) => {
	if (!path.match(/^\//)) {
		throw Error('Every fetch path must be start with "/"')
	} else {
		let url = `http://localhost:8888${path}`
		return fetch(url, options).then((res) => res.json())
	}
}

export const getDocsList = () => query('/docs/list')

export const getDocByGuid = (guid) => query(`/docs/details/${guid}`)

export const getLibraryTOC = () => query('/libraryTOC')
