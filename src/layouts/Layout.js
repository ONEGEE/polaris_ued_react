import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const StyledHeader = styled(Header)`
  flex: 0;
`
const StyledMain = styled.div`
	flex: 1;
	margin-top: 25px;
`
const StyledFooter = styled(Footer)`
  flex: 0;
`
export class Layout extends Component {
	render () {
		return (
			<React.Fragment>
				<StyledHeader />
				<StyledMain>
					<Container>{this.props.children}</Container>
				</StyledMain>
				<StyledFooter />
			</React.Fragment>
		)
	}
}

export default Layout
