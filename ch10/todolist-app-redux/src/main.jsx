import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import App from './App'
import {Provider} from 'react-redux'
import AppStore from './redux/AppStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 어디선가 redux에 의해 상태가 관리되어야 하는 상위 컴포넌트로 Provider등록. 보통 앱의 root컴포넌트로 등록 */}
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
