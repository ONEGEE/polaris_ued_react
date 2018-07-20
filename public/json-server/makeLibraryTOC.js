const fs = require('fs')
const path = require('path')

// 先不处理异步的逻辑好了，全部用同步写，异步的处理逻辑可能需要把所有方法都包装成promise然后用async/await控制异步流

module.exports = {
	make: () => {
		let libraryTOC
		let libraryDirName = 'library'
		let libraryAbsolutePath = path.resolve(__dirname, libraryDirName)

		const getSubDirsList = (dirAbsolutePath) => {
			try {
				let id = 1
				let subDirsList = []

				fs.readdirSync(dirAbsolutePath).forEach((subDirName, index) => {
					let subDirAbsolutePath = path.join(dirAbsolutePath, subDirName)

					if (fs.statSync(subDirAbsolutePath).isDirectory()) {
						subDirsList.push({ id: id, name: subDirName, path: subDirAbsolutePath })
						id++
					}
				})

				return subDirsList
			} catch (err) {
				throw Error(err)
			}
		}

		const getSubFilesList = (dirAbsolutePath) => {
			try {
				let id = 1
				let subFilesList = []

				fs.readdirSync(dirAbsolutePath).forEach((subFileName, index) => {
					let subFileAbsolutePath = path.join(dirAbsolutePath, subFileName)

					if (fs.statSync(subFileAbsolutePath).isFile()) {
						subFilesList.push({ id: id, name: subFileName, path: subFileAbsolutePath })
						id++
					}
				})

				return subFilesList
			} catch (err) {
				throw Error(err)
			}
		}

		const getProjectVersionsPagesList = (dirAbsolutePath) => {
			let toc

			// get project List
			toc = getSubDirsList(dirAbsolutePath)

			toc.forEach((projectItem, index) => {
				// get version List
				let versionDirList = getSubDirsList(`${projectItem.path}`)

				// get page list and push pages key
				versionDirList.forEach((versionItem, index) => {
					let pagesDirList = getSubDirsList(`${versionItem.path}`)

					// push coverPath key to pages item
					pagesDirList.forEach((pageModuleItem, index) => {
						let pageModuleDirList = getSubDirsList(`${pageModuleItem.path}`)
						let pageModulePreviewDir = pageModuleDirList.filter((pageModuleFragmentItem, index) => {
							return pageModuleFragmentItem.name === 'preview'
						})

						let pagePreviewFileList = getSubFilesList(pageModulePreviewDir[0].path)
						pageModuleItem.coverPath = pagePreviewFileList[0].path
						// console.log(pageModuleItem)
					})

					versionItem.pages = pagesDirList
				})

				// push versions key
				projectItem.versions = versionDirList
			})

			return toc
		}

		const getPathFragmentAfterLibraryDirName = (absolutePath) => {
			let splitPathToArrayByLibraryDirName = absolutePath.split(libraryDirName, 2)
			let pathFragment = `/${libraryDirName}${splitPathToArrayByLibraryDirName[1]}`
			return pathFragment
		}

		const setRootPathAsLibraryDirName = (TOCArray) => {
			try {
				TOCArray.forEach((itemObj, index) => {
					for (let subItem in itemObj) {
						if (subItem.search(/path/i) !== -1) {
							itemObj[subItem] = getPathFragmentAfterLibraryDirName(itemObj[subItem])
						}
						if (Array.isArray(itemObj[subItem])) {
							setRootPathAsLibraryDirName(itemObj[subItem])
						}
					}
				})
				return TOCArray
			} catch (err) {
				throw Error(err)
			}
		}

		libraryTOC = getProjectVersionsPagesList(libraryAbsolutePath)

		setRootPathAsLibraryDirName(libraryTOC)

		return libraryTOC
	}
}
