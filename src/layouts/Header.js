import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Segment, Container, Menu, Header as Title } from 'semantic-ui-react'

class Header extends React.Component {
	handleItemClick = (path) => {
		this.props.history.push(path)
	}
	render () {
		const { location } = this.props
		let navList = [
			{
				name: 'home',
				path: '/home/'
			},
			{
				name: 'readme',
				path: '/readme/intro'
			},
			{
				name: 'dev',
				path: '/dev/'
			},
			{
				name: 'library',
				path: '/library/'
			},
			{
				name: 'resources',
				path: '/resources/'
			}
		]

		const makeMenuItem = navList.map((nav, index) => {
			let reg = new RegExp(`^/${nav.name}`)
			return (
				<Menu.Item
					name={nav.name}
					active={reg.test(location.pathname)}
					as='a'
					onClick={() => this.handleItemClick(nav.path)}
					key={index}
				/>
			)
		})

		return (
			<Segment inverted vertical>
				<Container>
					<Menu inverted pointing secondary>
						<Menu.Item>
							<Link to='/home/'>
								<Title inverted>Polaris</Title>
							</Link>
						</Menu.Item>
						<Menu.Menu position='right'>{makeMenuItem}</Menu.Menu>
					</Menu>
				</Container>
			</Segment>
		)
	}
}

export default withRouter(Header)
