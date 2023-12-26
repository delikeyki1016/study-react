import PropTypes from 'prop-types'

const PropTypeTest3 = (props)=> {
    let result = 0
    switch (props.oper) {
        case '+':
            result = props.x + props.y
            break
        case '*':
            result = props.x * props.y
            break
        default:
            result = 0
    }

    return (
        <div>
            <h2>PropType Test 3</h2>
            <h3>연산방식: {props.oper}</h3>
            <hr />
            <div>
                {props.x} {props.oper} {props.y} = {result}
            </div>
        </div>
    )
}

// 유효성 검증 함수 선언 
// 상위에서 전달한 속성값을 아래의 함수를 거쳐서 유효한 값인 지 판단하고 싶다.
// 두번째 매개변수는 이 함수를 호출하게 한 속성명 ==> 여러 속성에 이 함수를 재사용이 가능하기때문에 속성명을 명시.
// 세번째 매개변수는 이 함수로 판단하고자 하는 컴포넌트명 ==> 여러 컴포넌트에서 재사용 가능
const calcChecker = (props, propName, componentName) => {
    if(propName === 'oper') {
        // 이 속성 값을 뽑아서. +, *가 아니면 에러 발생
        if (props[propName] !== '+' && props[propName] !== '*') {
            // ``내용이 콘솔에 출력
            return new Error(`${propName} 의 속성값이 반드시 '+', '*' 이어야 합니다. (at ${componentName})`)
        }
    }
    if (propName === 'y') {
        let y = props[propName]
        if (y > 100 || y < 0 || y % 2 !== 0) {
            return new Error(`${propName} 속성 값은 0 이상 100 이하의 짝수만 허용합니다. (at ${componentName})`)
        }
    }
}

PropTypeTest3.propTypes = {
    x: PropTypes.number,
    y: calcChecker, // 함수로 유효성 체크
    oper: calcChecker // 함수로 유효성 체크
}

// 타입의 기본 값 지정, 타입 지정이 isRequired가 아니라면, 상위에서 데이터 전달이 안될 경우를 대비
PropTypeTest3.defaultProps = {
    x: 100,
    y: 20,
    oper: '+'
}

export default PropTypeTest3