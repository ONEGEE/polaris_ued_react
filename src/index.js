import React from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'

import ReactRouter from '@/routes'
import registerServiceWorker from './utils/registerServiceWorker'

const App = () => <ReactRouter />

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
