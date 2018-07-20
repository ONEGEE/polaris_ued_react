import React from 'react'
import Layout from '@/layouts/Layout'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import Docs from '@/components/Docs'
import DocMenu from '@/components/DocMenu'

import { getDocsList, getDocByGuid } from '@/services/query'
import { formatDocTitleAsPath } from '@/utils/format'

export class ReadMe extends React.Component {
	state = {
		docsList: [],
		activeDocContent: {}
	}

	componentDidMount() {
		this.setDocsList()
	}

	setDocsList = () => {
		getDocsList().then((data) => {
			this.setState({ docsList: data }, () => {
				this.setDefaultRoutePath(data[0])
			})
		})
	}

	setActiveDocByGuid = (guid) => {
		getDocByGuid(guid).then((data) => this.setState({ activeDocContent: data }))
	}

	setDefaultRoutePath = (data) => {
		this.props.history.push(formatDocTitleAsPath(data.title))
		this.setActiveDocByGuid(data.guid)
	}

	render() {
		const { match } = this.props

		const MenuRoute = () => (
			<Route
				path={`${match.url}/:category?`}
				render={(props) => (
					<DocMenu {...props} data={this.state.docsList} setActiveDocByGuid={this.setActiveDocByGuid} />
				)}
			/>
		)

		const DocsRoute = () => (
			<Route
				path={`${match.url}/:category?`}
				render={(props) => <Docs {...props} data={this.state.activeDocContent} />}
			/>
		)

		return (
			<Layout>
				<Grid>
					<Grid.Column width={4}>
						<MenuRoute />
					</Grid.Column>
					<Grid.Column width={12}>
						<DocsRoute />
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default ReadMe
