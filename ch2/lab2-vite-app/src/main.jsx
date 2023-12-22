import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// css도 모듈처럼 import 로 사용하면 모듈번들러가 처리해줌. 
// React 사상 : 100% 자바스크립트로 컴포넌트 정의
// css 파일을 어디선가 import하면 전역에서 사용 가능하다.
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 개발환경에서만 의미, 빌드 시킬때는 제거됨. 개발코드가 문제 없는 지 검증하기 위해서 컴포넌트를 내부적으로 두번 로딩해줌. 
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
