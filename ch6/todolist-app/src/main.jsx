import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import App01 from './lab1-React-memo/App01'
import App02 from './lab2-callback/App02'
import App03 from './lab3-React-memo-2nd/App03'
import App04 from './lab4-split/App04'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App01 /> */}
    {/* <App02 /> */}
    {/* <App03 /> */}
    <App04 />
  </React.StrictMode>,
)
