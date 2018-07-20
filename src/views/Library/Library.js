import React from 'react'
import Layout from '@/layouts/Layout'
import { getLibraryTOC } from '@/services/query'
import { Grid, Menu, Card, Image } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

class Library extends React.Component {
	state = {
		library: [],
		currentPages: []
	}

	componentDidMount() {
		getLibraryTOC().then((data) =>
			this.setState({ library: data }, () => {
				let linkto = data[0].versions[0].path.replace('/library', '')
				this.props.history.push(`/library${linkto}`)
			})
		)
	}

	handlerVersionsClick(path) {
		let linkto = path.replace('/library', '')
		this.props.history.push(`/library${linkto}`)
	}

	render() {
		let { library } = this.state

		let pageRoute = []

		const setProject = library.map((project) => {
			return (
				<Menu text vertical key={project.path}>
					<Menu.Item header>{project.name}</Menu.Item>
					{project.versions.map((version) => {
						let { pages } = version
						pageRoute.push(
							<Route
								path={`/library${version.path.replace('/library', '')}`}
								// link='/library/:path'
								render={() => (
									<Card.Group itemsPerRow={4}>
										{pages.map((page) => {
											return (
												<Card
													target="_blank"
													href={`/sketchmeasure${page.path}`}
													key={page.path}
												>
													<Image src={`http://localhost:8888${page.coverPath}`} />

													<Card.Content>
														<Card.Header>{page.name}</Card.Header>
														<Card.Meta>
															<span className="date">Joined in 2015</span>
														</Card.Meta>
														{/* <Card.Description>{page.path}</Card.Description> */}
													</Card.Content>
												</Card>
											)
										})}
										{/* {console.log(pages)} */}
									</Card.Group>
								)}
								key={version.path}
							/>
						)

						return (
							<Menu.Item
								name={version.name}
								active={false}
								onClick={() => this.handlerVersionsClick(version.path)}
								key={version.path}
							/>
						)
					})}
				</Menu>
			)
		})

		return (
			<Layout type="headerOnly">
				<Grid>
					<Grid.Column width={3}>{setProject}</Grid.Column>
					<Grid.Column width={13}>
						<Switch>
							{pageRoute}
							{/* <Route
							link='/library/:project'
							render={() => (
								<Card.Group itemsPerRow={3}>
									{moduleItems.map((item, index) => (
										<Card target='_blank' href={item.href} key={index}>
											<Card.Content header={item.header} />
										</Card>
									))}
								</Card.Group>
							)}
						/> */}

							{/* 使用这种写法可以跳转新页面...但是循环就要自己写了 */}
						</Switch>
					</Grid.Column>
				</Grid>
			</Layout>
		)
	}
}

export default Library
