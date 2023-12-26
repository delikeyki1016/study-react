// 아래는 global로 임포트한것이다. 다른 곳에서 클래스명이 같다면, 나중에 import한 것이 적용된다.
import './one.css'

const One = () => {
    return (
        <div className="wrapper">
            <h3>hello, I am One component</h3>
        </div>
    )
}

export default One