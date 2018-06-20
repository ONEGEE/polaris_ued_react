import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './views/Home'
import registerServiceWorker from './utils/registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
