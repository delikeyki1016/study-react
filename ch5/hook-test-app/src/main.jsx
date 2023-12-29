import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import UseEffectComponent from './lab1-useEffect/UseEffectTest'
import UseEffectClock from './lab2-useEffect-cleanup/UseEffectClock'
import ArrayReduceComponent from './lab3-array-reduce/ArrayReduce' 
import UseReducerComponent from './lab4-useReducer/UseReducerTest'
import UseRefComponent from './lab5-useRef/UseRef'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <> 로그를 찍으면 2번씩 호출되기 때문에 React.StrictMode 안쓰고 테스트 
  //   {/* <UseEffectComponent /> */}
  //   {/* <UseEffectClock /> */}
  //   {/* <ArrayReduceComponent /> */}
  // </>
  <React.StrictMode>
    <UseReducerComponent />
    {/* <UseRefComponent /> */}
  </React.StrictMode>
)
