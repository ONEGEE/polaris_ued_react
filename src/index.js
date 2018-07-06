import React from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'
import Home from '@/views/Home'
import Error from '@/views/Error'
import Dev from '@/views/Dev'
import ReadMe from '@/views/ReadMe'
import Library from '@/views/Library'
import Resources from '@/views/Resources'
import registerServiceWorker from './utils/registerServiceWorker'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/readme' component={ReadMe} />
			<Route exact path='/dev/' component={Dev} />
			<Route exact path='/library' component={Library} />
			<Route exact path='/resources' component={Resources} />
			<Route path='/error' component={Error} />
			<Route path='*' render={(props) => <Redirect to='/error' />} />
		</Switch>
	</Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
