import PropTypes from 'prop-types'
import Message from './Message'

const PropTypeTest1 = (props) => {
    return (
        <div>
            <h2>PropType Test1</h2>
            <p>id: {props.id}, num: {props.num}, bool: {props.bool}</p>
            <h3>object data</h3>
            <p>name: {props.obj['name']}, age: {props.obj['age']}</p>
            <h3>array data</h3>
            <div>
                {
                    // key 값 지정 
                    props.array.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                }
            </div>
            <button onClick={()=> props.fun(10, 20)}>function call</button>
        </div>
    )
}

// PropTypeTest1 컴포넌트를 이용하는 곳에 props type을 정해서 요청, propTypes선언은 컴포넌트 바깥에서 선언해야함 
PropTypeTest1.propTypes = {
    id: PropTypes.string.isRequired,
    num: PropTypes.number,
    bool: PropTypes.bool,
    obj: PropTypes.object,
    array: PropTypes.array,
    fun: PropTypes.func,
}

// 복잡한 타입
const PropTypeTest2 = (props) => {
    return (
        <div>
            <h2>PropType Test 2</h2>
            <p>message: {props.message.msg}</p>
            <p>color: {props.color}</p>
            <p>width: {props.width}</p>
            <p>info: {props.info.color}, {props.info.weight}</p>
            <p>nums: {props.nums[0]}, {props.nums[1]}</p>
        </div>
    )
}

PropTypeTest2.propTypes = {
    // 객체의 타입까지 명시하고 싶을 때(Message 클래스의 인스탄스임을 정의)
    message: PropTypes.instanceOf(Message),
    // 값들 중에 하나의 타입으로 지정
    color: PropTypes.oneOf(['red', 'blue']),
    // number, string 둘 중 하나의 타입 
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    info: PropTypes.shape({
        //json object인데, 아래의 키와 타입을 맞춘 object
        color: PropTypes.string.isRequired,
        weight: PropTypes.number
    }),
    // 배열의 데이터가 숫자 타입이어야 함
    nums: PropTypes.arrayOf(PropTypes.number),
}

export { PropTypeTest1, PropTypeTest2 }
