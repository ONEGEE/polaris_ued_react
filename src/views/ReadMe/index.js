import React from 'react'
import Layout from '@/layouts/Layout'
import { Menu, Grid } from 'semantic-ui-react'
import { Route, NavLink } from 'react-router-dom'
import Doc from '@/components/Doc'
import { query } from '@/utils/query'
import { EHOSTUNREACH } from 'constants'

export class Readme extends React.Component {
	state = {
		docsList: [],
		activeDocs: {
			title: 'Intro',
			path: 'intro',
			guid: 1
		}
	}

	componentDidMount () {
		query('/docs/list').then((res) => res.json()).then((data) => this.setState({ docsList: data }))
	}

	setDocs = (title, path, guid) => {
		this.setState({ activeDocs: { title, path, guid } }, () => this.props.history.push(path))
	}

	render () {
		const makeMenuList = this.state.docsList.map((docsItem, index) => {
			let path = docsItem.title.replace(/\s/g, '-').toLowerCase()
			return (
				<Menu.Item
					name={docsItem.title}
					active={path === this.state.activeDocs.path}
					onClick={() => this.setDocs(docsItem.title, path, docsItem.guid)}
					key={index}
				/>
			)
		})

		return (
			<Layout>
				<Grid>
					<Grid.Column width={4}>
						<Menu text vertical>
							{makeMenuList}
						</Menu>
					</Grid.Column>
					<Grid.Column width={12}>
						<Route
							path={'/readme/:title'}
							render={(props) => (
								<Doc {...props} title={this.state.activeDocs.title} guid={this.state.activeDocs.guid} />
							)}
						/>
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default Readme
