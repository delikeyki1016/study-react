import {useState} from 'react'

const ControlledComponent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const changeView = (e) => {
        //  현재 이벤트가 발생한 객체(input)의 값
        let newValue = parseInt(e.target.value) 
        if(isNaN(newValue)) newValue = 0 // isNaN : number가 아니라면 
        if(e.target.id === 'x') setX(newValue)
        else setY(newValue)

    }

    return (
        <div>
            <hr />
            <h2>제어 컴포넌트</h2>
            <p>uncontrolled component: <input type="text" /></p>
            {/* 이벤트캐치함수가 없다면 아무것도 입력되지 않는다 */}
            <p>controlled component: <input type="text" value={'kim'} /></p>
            <p>
                {/* controlled component */}
                {/* value값이 이 컴포넌트의 데이터로 명시, 이 값이 변경되지 않는 한 유저화면은 update되지 않는다. */}
                {/* id값은 document.getElementById()함수를 이용하기 위해서가 아니라, 
                이벤트 함수 하나에서 두개의 input부분을 같이 핸들링하기 위해서 */}
                x: <input type="text" id="x" value={x} onChange={changeView} /><br/>
                y: <input type="text" id="y" value={y} onChange={changeView} />
            </p>
            <div>결과: {x + y}</div>
        </div>
    )
}

export default ControlledComponent