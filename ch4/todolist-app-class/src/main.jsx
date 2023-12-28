import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './components/AppContainer'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode는 개발환경에서만 동작. build시켜서 운영환경으로 만들때는 자동으로 제거됨
  // 어플리케이션의 내부 문제점을 파악하기 위해서, 컴포넌트를 두번 로딩해서 검사를 진행함 
  // 컴포넌트의 render가 두번 호출됨 
  
  // <React.StrictMode>
  //   <AppContainer />
  // </React.StrictMode>,
  <AppContainer />
)
