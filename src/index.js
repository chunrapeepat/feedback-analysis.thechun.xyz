import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker'

// global style belong here
injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

const App = () => (
  <div>
    <Header />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
