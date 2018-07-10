import React from 'react'
import Layout from '@/layouts/Layout'
import { query } from '@/utils/query'
import { Grid, Menu, Card, Modal, Header, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
		let { history } = this.props

		let moduleItems = [
			{
				header: 'ModuleItem',
				meta: '7 days ago',
				href: '/sketchmeasure/'
				// onClick: () => {
				// 	history.push('/d')
				// }
			},
			{
				header: 'ModuleItem-1',
				meta: '7 days ago'
			},
			{
				header: 'ModuleItem-2',
				meta: '7 days ago'
			}
		]

		return (
			<Layout type='headerOnly'>
				<Grid>
					<Grid.Column width={3}>
						<Menu text vertical>
							<Menu.Item header>project Name</Menu.Item>
							<Menu.Item name='version1' active={false} onClick={() => {}} />
							<Menu.Item name='version2' active={false} onClick={() => {}} />
						</Menu>
					</Grid.Column>
					<Grid.Column width={13}>
						{/* 使用这种写法可以跳转新页面...但是循环就要自己写了 */}
						<Card.Group itemsPerRow={3}>
							{moduleItems.map((item, index) => (
								<Card target='_blank' href={item.href} key={index}>
									<Card.Content header={item.header} />
								</Card>
							))}
						</Card.Group>
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default Library
