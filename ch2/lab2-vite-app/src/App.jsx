import Test1 from './Test1-JSX'
import Test2 from './Test2-JSX'
import PropsTest1 from './Test3-props'
import PropsTest2 from './Test4-props'
import StateTest from './Test5-state'


// 함수 스타일의 컴포넌트(UI) 선언 
const App = () => {
  const msg = 'World'
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-light mb-3">
        {/* jsx 내에서 동적데이터 추가는 {}보간법 을 이용 */}
        {x} + {y} = {x + y}
      </div>
    )
  }
  // 여러 줄 작성일 경우 ()
  return ( 
    <div className="container">
      <h2>Hello {msg}</h2>
      {addResult(10, 5)}
      <hr className="dash-style" />
      <Test1 />
      <hr className="dash-style" />
      <Test2 />
      <hr className="dash-style" />
      <PropsTest1 />
      <hr className="dash-style" />
      <PropsTest2 />
      <hr className="dash-style" />
      <StateTest />
    </div>
  )
}

export default App