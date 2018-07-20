export const formatDocTitleAsPath = (title) => {
	return title.replace(/\s/g, '-').toLowerCase()
}

export const removeLibraryDirnameAsPath = (path) => {
	return path.replace('/library', '')
}
