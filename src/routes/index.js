import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '@/views/Home'
import Error from '@/views/Error'
import Dev from '@/views/Dev'
import ReadMe from '@/views/ReadMe'
import Library from '@/views/Library'
import Resources from '@/views/Resources'
import SketchMeasureDashboard from '@/components/SketchMeasure'

const ReactRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' render={() => <Redirect to='/home/' />} />
				<Route exact path='/home/' component={Home} />
				<Route path='/readme/:catagory' component={ReadMe} />
				<Route exact path='/dev/' component={Dev} />
				<Route exact path='/library/' component={Library} />
				<Route exact path='/resources/' component={Resources} />
				<Route path='/error/' component={Error} />
				<Route path='/sketchmeasure/' component={SketchMeasureDashboard} />
				<Route path='*' render={(props) => <Redirect to='/error' />} />
			</Switch>
		</Router>
	)
}

export default ReactRouter
