import React from 'react'
import Layout from '@/layouts/Layout'
import { Menu, Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Docs from '@/components/Docs'
import { query } from '@/utils/query'

export class ReadMe extends React.Component {
	state = {
		docsList: [],
		activeDocs: {
			title: '',
			path: ' ',
			guid: 1
		}
	}

	componentDidMount() {
		query('/docs/list').then((res) => res.json()).then((data) => {
			let { title, path, guid } = data[0]
			title = title.replace(/\s/g, '-').toLowerCase()
			this.setState({ docsList: data, activeDocs: { title, path, guid } })
		})
	}

	setDocs = (title, path, guid) => {
		this.setState({ activeDocs: { title, path, guid } }, () => this.props.history.push(path))
	}

	render() {
		const makeMenuList = this.state.docsList.map((docsItem, index) => {
			let path = docsItem.title.replace(/\s/g, '-').toLowerCase()
			return (
				<Menu.Item
					name={docsItem.title}
					active={path === this.props.match.params.catagory}
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
								<Docs
									{...props}
									title={this.state.activeDocs.title}
									guid={this.state.activeDocs.guid}
								/>
							)}
						/>
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default ReadMe