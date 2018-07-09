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
		let { type = 'default' } = this.props

		return (
			<React.Fragment>
				{(() => {
					switch (type) {
						case 'headerOnly':
							return (
								<React.Fragment>
									<StyledHeader />
									<StyledMain>
										<Container>{this.props.children}</Container>
									</StyledMain>
								</React.Fragment>
							)
						case 'default':
						default:
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
				})()}
			</React.Fragment>
		)
	}
}

export default Layout
