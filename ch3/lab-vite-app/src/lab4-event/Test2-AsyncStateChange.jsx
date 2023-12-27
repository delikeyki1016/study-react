import { useState } from 'react'

const AsyncStateChange = () => {
    const [count, setCount] = useState(0)

    // 비동기로 상태 변경이 된다. 함수가 동기적으로 처리되지 않기 때문에 원하는 결과(순차적 실행)가 나오지 않는다.
    const asyncIncrement = () => {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    //  setter함수에 매개변수로 함수를 지정하면 함수가 끝날때까지 대기함. 동기적으로 처리된다.
    const syncIncrement = () => {
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }

    return (
        <div>
            <hr />
            <h2>비동기,동기 상태 변경</h2>
            <p>count: {count}</p>
            <div>
                <button onClick={asyncIncrement}>async increment 비동기 실행</button>
                <button onClick={syncIncrement}>sync increment 동기 실행</button>
            </div>
        </div>
    )
}

export default AsyncStateChange