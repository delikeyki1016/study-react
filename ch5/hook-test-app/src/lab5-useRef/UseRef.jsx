import {useRef, useState} from 'react'

const UseRefComponent = () => {
    // 상태 데이터 => 값이 바뀌면 re-rendering => 바뀐 데이터 유지
    const [name, setName] = useState("홍길동")
    // 변경된 데이터를 가질 때, 화면이 리랜더링될 필요는 없지만, 변경된 데이터를 저장은 하고 싶을 때 사용.
    const refTel = useRef('010-1111-2222')
    // 매개변수에 null(초기값), 임의 식별자 전달 => 이 값으로 리얼돔에 접근 
    const elName = useRef(null) 

    const changeFocus = () => {
        // 특정 input 요소에 자동으로 포커싱. 리얼돔을 조작해야함
        // elName.current : 현재 이 식별자로 식별되는 real dom
        if(elName.current) elName.current.focus()
    }

    return (
        <div>
            {/* controlled component : state에 의해 제어되는 태그 */}
            name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} ref={elName} /><br />
            name state: {name} <br />
            {/* 처음엔 null이었다가 '홍길동ㅋ'를 입력하면 <input type='text' value='홍길동ㅋ'/> */}
            {console.log(elName.current)} 
            {/* uncontrolled component : */}
            {/* 유저가 입력한 값을 변수에 담아놓기. 값이 변경될 때마다 화면이 리랜더링될 필요가 없을때 useRef 사용할 수 있다 */}
            {/* name 때문에 리랜더링될 때 데이터가 유지는 되어야 한다. */}
            tel: <input type='text' onChange={(e) => (refTel.current = e.target.value)} /><br/>
            tel ref: {refTel.current} <br />
            <button onClick={changeFocus}>포커스 이동</button>
        </div>
    )
}

export default UseRefComponent

