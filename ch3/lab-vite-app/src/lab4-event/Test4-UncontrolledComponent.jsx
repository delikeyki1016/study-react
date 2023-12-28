import React, {useState, useRef} from 'react'

const UncontrolledComponent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [result, setResult] = useState(0)

    // real dom의 식별자로 할당할 값
    const elemX = useRef(null)
    const elemY = useRef(null)

    const add = () => {
        // 이벤트가 발생했을 때, 유저가 입력한 데이터를 추출해야한다. 제어컴포넌트가 아니기 때문에 virtual dom에서는 값을 얻어낼 수 없다.
        // real dom에 접근해서 알아내야 함. elemX.current : 현재 이 식별자로 식별되는 real dom
        let x1 = parseInt(elemX.current ? elemX.current.value : "", 10) // 10은 디폴트값 선언
        let y1 = parseInt(elemY.current ? elemY.current.value : "", 10) // elemY가 현재 있다면, 현재값을 대입하고 그렇지 않으면 빈문자열 대입
        if(isNaN(x1)) x1 = 0 // x1이 넘버가 아니면 x1=0
        if(isNaN(y1)) y1 = 0
        setX(x1)
        setY(y1)
        setResult(x1+y1)
    }
    
    return (
        <div>
            <hr />
            <h3>비제어 컴포넌트</h3>
            {/* 브라우저 자체를 조작해서 효과를 내야할 때(ex. 자동 포커스 기능, 자동 스크롤 기능) */}
            {/* 빈번히 사용하면 안됨. real-dom을 핸들링 하는것이므로 고비용 */}
            {/* value 값이 지정되지 않는다. */}
            <p>x: <input type="text" id="x" defaultValue={x} ref={elemX} /></p>
            <p>y: <input type="text" id="y" defaultValue={y} ref={elemY} /></p>
            <button onClick={add}>add</button>
            <p>결과 {result}</p>
        </div>

    )
}

export default UncontrolledComponent