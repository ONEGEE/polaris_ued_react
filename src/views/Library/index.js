import React from 'react'
import Layout from '@/layouts/Layout'
import { query } from '@/utils/query'
import { Grid, Segment, Menu } from 'semantic-ui-react'

class Library extends React.Component {
	state = {
		// library: [
		// 	{
		// 		id: 1,
		// 		name: 'Web',
		// 		coverPath: '',
		// 		path: '',
		// 		versions: [
		// 			{
		// 				id: 1,
		// 				name: '0.1',
		// 				coverPath: '',
		// 				pages: [
		// 					{
		// 						id: 1,
		// 						name: '',
		// 						coverPath: '',
		// 						path: ''
		// 					},
		// 					{
		// 						id: 2,
		// 						title: '',
		// 						coverPath: '',
		// 						linkto: ''
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// ]
	}

	componentDidMount () {
		query('/libraryTOC').then((res) => res.json()).then((data) => this.setState({ library: data }))
	}

	render () {
		return (
			<Layout type='headerOnly'>
				{/* <iframe src='http://localhost:8888/ui-library/0.1/' width='100%' height='500px' /> */}
				Sketch Library
			</Layout>
		)
	}
}

export default Library
