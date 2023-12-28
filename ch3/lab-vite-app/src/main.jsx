import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// global css : 모든 jsx에서 사용가능
import 'bootstrap/dist/css/bootstrap.css' 

import CSSTest from './lab1-style/lab1_CSSTest.jsx'
import StyledComponent from './lab2-styled-component/Lab2_StyledComponent.jsx'
import PropTypeComponent from './lab3-props-type/Lab3_propType.jsx'
import EventComponent from './lab4-event/Lab4-EventComponent.jsx'
import ContainerComponent from './lab5-container-component/ContainerComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CSSTest /> */}
    {/* <StyledComponent /> */}
    {/* <PropTypeComponent /> */}
    <EventComponent />
    {/* <ContainerComponent /> */}
  </React.StrictMode>,
)
