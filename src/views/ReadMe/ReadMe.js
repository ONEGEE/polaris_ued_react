import React from 'react'
import Layout from '@/layouts/Layout'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import Docs from '@/components/Docs'
import DocMenu from '@/components/DocMenu'

import { getDocsList, getActiveDocByGuid } from '@/services/query'
import { formatDocTitleToPath } from '@/utils/format'

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
		getActiveDocByGuid(guid).then((data) => this.setState({ activeDocContent: data }))
	}

	setDefaultRoutePath = (data) => {
		this.props.history.push(formatDocTitleToPath(data.title))
		this.setActiveDocByGuid(data.guid)
	}

	render() {
		const { match } = this.props
		return (
			<Layout>
				<Grid>
					<Grid.Column width={4}>
						<Route
							path={`${match.url}/:category?`}
							render={(props) => (
								<DocMenu
									{...props}
									data={this.state.docsList}
									setActiveDocByGuid={this.setActiveDocByGuid}
								/>
							)}
						/>
					</Grid.Column>
					<Grid.Column width={12}>
						<Route
							path={`${match.url}/:category?`}
							render={(props) => <Docs {...props} data={this.state.activeDocContent} />}
						/>
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default ReadMe
