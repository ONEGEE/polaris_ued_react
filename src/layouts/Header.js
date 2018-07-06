import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderWraper = styled.div`
	background: #000;
	color: #fff;
	height: 50px;
	width: 100%;
	text-align: center;
`

const Header = () => {
	return (
		<HeaderWraper>
			<ul>
				<li>
					<NavLink to='/'>Polaris</NavLink>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/readme'>ReadMe</NavLink>
					<NavLink to='/dev'>Dev</NavLink>
					<NavLink to='/library'>Library</NavLink>
					<NavLink to='/resources'>Resources</NavLink>
				</li>
			</ul>
		</HeaderWraper>
	)
}

export default Header
