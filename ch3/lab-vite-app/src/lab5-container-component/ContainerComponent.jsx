import {useState} from 'react'
import PresentationalComponent1 from './PresentationalComponent1'
import PresentationalComponent2 from './PresentationalComponent2'

// 업무로직을 목적으로 하는 컴포넌트
// 공통의 데이터를 이용하는 자식컴포넌트의 부모 역할
const ContainerComponent = () => {
    const [count, setCount] = useState(0)
    const myIncrement = () => {
        setCount(count + 1)
    }

    return (
        <>
            <PresentationalComponent1 count={count} />
            <PresentationalComponent2 increment={myIncrement} />
        </>
    )
}

export default ContainerComponent