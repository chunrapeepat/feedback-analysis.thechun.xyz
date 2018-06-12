import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import App from './components/App'
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
