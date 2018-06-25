import React from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'
import Home from '@/views/Home'
import Error from '@/views/Error'
import Dev from '@/views/Dev'
import ReadMe from '@/views/ReadMe'
import registerServiceWorker from './utils/registerServiceWorker'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/readme' component={ReadMe} />
			<Route path='/dev' component={Dev} />
			<Route path='/error' component={Error} />
			<Route path='*' render={(props) => <Redirect to='/error' />} />
		</Switch>
	</Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
