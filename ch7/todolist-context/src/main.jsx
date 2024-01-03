import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { TodoProvider } from './TodoContext'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Context에 데이터를 공개하는 컴포넌트를 그 데이터를 활용하는 모든 컴포넌트의 상위가 되게 등록 */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
