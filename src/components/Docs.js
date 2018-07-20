import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { query } from '@/utils/query'

export class Docs extends Component {
	state = {
		title: '',
		desc: ''
	}

	componentWillReceiveProps() {
		this.queryDocs()
	}

	queryDocs = () => {
		query(`/docs/details/${this.props.guid}`)
			.then((res) => res.json())
			.then((data) => this.setState({ title: data.title, desc: data.desc }))
	}

	render() {
		const { title, desc } = this.state
		return (
			<div>
				<Header as={'h1'}>{title}</Header>
				<p>{desc}</p>
			</div>
		)
	}
}

export default Docs
