// 시간날짜 포맷 관련 모듈 
// npm install date-and-time

import React, {Component} from 'react'
import DateAndTime from 'date-and-time'

class Clock extends Component {
    // 시계 화면이 계속 리랜더링이 되어야 한다. 
    state = {
        currentTime: new Date()
    }

    // setInterval()의 리턴값 정의, interval을 식별해서 제어할 수 있게 0 이상의 숫자
    handle = 0
    
    // 라이프사이클함수
    // 마운트 될 때 최초에 한번 실행
    componentDidMount = () =>{
        this.handle = setInterval(()=> {
            this.setState({currentTime: new Date()})
            console.log('setInterval 동작')
        }, 1000)
    }

    // 라이프사이클함수
    // 컴포넌트가 언마운트되었을 때, componentDidMount에서 등록한 setInterval을 멈추게 하자
    componentWillUnmount = () => {
        clearInterval(this.handle)
    }

    render() {
        return (
            <div className='boxStyle'>
                {/* 첫번째 매개변수의 시간을 두번째 매개변수의 포맷대로 출력 */}
                <h3>{DateAndTime.format(this.state.currentTime, this.props.formatString)}</h3>
                {/* {this.setState} */}
            </div>
        )
    }
}

export default Clock