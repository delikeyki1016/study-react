import React from "react"
import { connectClockTime } from "./connectClockTime"
import { connectMousePos } from "./connectMousePos"

// 우리가 만드는 컴포넌트
const Child = (props) => {
    // 고차함수에서 전달받은, position, currentTime을 props로 받음
    console.log('Child', props)
    return (
        <div>
            <h2>High Order Component 고차컴포넌트 이용하기</h2>
            {/* 시간출력,마우스출력이 공통이라고 가정하고 그 둘을 high order component로 구현해서 이용 */}
            <p>current time: {props.currentTime}</p>
            <p>mouse position: {props.position.x}, {props.position.y}</p>
        </div>
    )
}

// 우리가 이용하고자 하는 컴포넌트(child)를 직접 사용하는 것이 아니라, hof 함수를 거쳐서 공통 코드 추가된 컴포넌트를 이용하기 
export default connectMousePos(connectClockTime(Child, 'HH:mm:ss', 1000))
// => <Child currentTime={currentTime} position={position} />

// export default Child => 직접 이용 <Child />

// export default connectClockTime(Child, 'HH:mm:ss', 1000)
// => <Child currentTime={currentTime} />