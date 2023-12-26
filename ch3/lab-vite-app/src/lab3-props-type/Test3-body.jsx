import PropTypes from 'prop-types'

// 이 컴포넌트를 상위에서 사용한다. 
// <PropBody a1={10} /> 이렇게 사용했다면, props.a1으로 받아서 이용하면 된다. 
// <PropBody title={'타이틀명'}>hello</PropBody> 이렇게 사용한다면, 해당 body(hello)가 필요한 경우 
const PropBody = (props) => {
    return (
        <div>
            <h2>컴포넌트 바디 test</h2>
            <p>{props.title}</p>
            <p>
                {/* 상위에서 컴포넌트 body에 추가한 문자열은 자동으로 prop.children에 들어간다. */}
                {props.children}
            </p>
        </div>
    )
}

PropBody.propTypes = {
    title: PropTypes.string.isRequired,
}

export default PropBody