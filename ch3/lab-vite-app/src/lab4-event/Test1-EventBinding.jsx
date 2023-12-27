// 외부 모듈에서 export한 것을 사용하기 위해 import 
// import A from 'a' ==> export default ~ 로 공개된 것 
// import { A, B } from 'a' ==> export { A, B } 여러개 공개된 것 
// import A, { B } from 'a' ==> export default A; export { B, C, D } 여러개 공개 된 것 중 받고 싶은 것 만 
import React, { useState } from 'react'

const EventBinding = () => {
    // state data 선언
    const [count, setCount] = useState(0)
    
    // event callback 함수 선언
    const increment = () => {
        // 이벤트가 발생하면 state 데이터를 변경시키고, 화면이 re-rendering되게함
        setCount(count + 1)
    }

    //  event callback 함수 선언, 이벤트 객체 및 이벤트 발생한 곳의 데이터를 전달받아서.
    // 함수명.bind(this) 형식으로 이벤트 함수가 호출될 때, 이벤트 객체(this)는 마지막 매개변수로 전달된다.
    const incrementStep = (no, e) => {
        setCount(count + no)
        console.log(e)
    }

    return (
        <div>
            <h2>이벤트 바인딩(콜백함수를 등록) 테스트</h2>
            <p>count: {count}</p>
            <div>
                {/* 외부함수를 이벤트 콜백함수로 등록 */}
                <button onClick={increment} className='btn btn-secondary'>증가</button>
                &nbsp;
                {/* 익명함수를 이벤트 콜백함수로 등록 */}
                <button onClick={()=> setCount(count - 1)} className='btn btn-secondary'>감소</button>
                {/* 이벤트 함수를 호출하면서 데이터 전달 */}
                <div className="mt-1">
                    <button onClick={(e)=> incrementStep(2, e)} className='btn btn-secondary'>increment Step 2</button>
                    &nbsp;
                    <button onClick={incrementStep.bind(this, 3)} className='btn btn-primary'>increment Step 3</button>
                </div>
            </div>
        </div>
    )
}

export default EventBinding