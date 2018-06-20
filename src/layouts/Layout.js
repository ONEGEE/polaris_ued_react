import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const StyledHeader = styled(Header)`
  flex: 0;
`
const StyledMain = styled.div`flex: 1;`
const StyledFooter = styled(Footer)`
  flex: 0;
`
export class Layout extends Component {
	render () {
		return (
			<React.Fragment>
				<StyledHeader />
				<StyledMain>{this.props.children}</StyledMain>
				<StyledFooter />
			</React.Fragment>
		)
	}
}

export default Layout
