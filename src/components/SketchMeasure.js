/*
 * @Author: onegee 
 * @Date: 2018-07-13 01:13:19 
 * @Last Modified by:   onegee 
 * @Last Modified time: 2018-07-13 01:13:19 
 */

import React from "react"
import { Segment, Menu, Breadcrumb, Loader, Dimmer } from "semantic-ui-react"
import styled from "styled-components"

const StyledBreadcrumb = styled(Breadcrumb)`
	color: rgba(255, 255, 255, 0.5);
	font-weight: 400;
	i {
		color: #fff !important;
	}
`

const Navbar = () => {
	let sections = [
		{ key: "Home", content: "Home" },
		{ key: "Store", content: "Store" },
		{ key: "Shirt", content: "T-Shirt" }
	]
	return (
		<Segment inverted vertical size="mini">
			<Menu inverted pointing secondary size="small">
				<Menu.Item onClick={() => window.close()}>Close</Menu.Item>
				<Menu.Item>
					<StyledBreadcrumb icon="right angle" sections={sections} size="small" />
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item name="Preview" active={false} as="a" onClick={() => {}} />
					<Menu.Item name="Dowload" active={false} as="a" onClick={() => {}} />
				</Menu.Menu>
			</Menu>
		</Segment>
	)
}

const SketchMeasureWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	height: 100%;
`
const StyledIframe = styled.iframe`
	border: none;
	width: 100%;
	height: 100%;
	felx: 1;
`

/**
 * props
 * ifrmae { pathSrc title }
 * Navbar { previewUrl, DownloadUrl, { content, content, content } = BreadcrumbSections }
 */
class SketchMeasure extends React.Component {
	state = {
		loading: true
	}
	render() {
		let { library, project, version, page } = this.props.match.params
		return (
			<SketchMeasureWrapper>
				<Dimmer active={this.state.loading}>
					<Loader inverted />
				</Dimmer>
				<Navbar />

				<StyledIframe
					src={`http://localhost:8888/${library}/${project}/${version}/${page}`}
					// src=`http://localhost:8888/ui-library/APP/0.1/文章`
					title="path"
					onLoad={() => this.setState({ loading: false })}
				/>
			</SketchMeasureWrapper>
		)
	}
}

export default SketchMeasure
