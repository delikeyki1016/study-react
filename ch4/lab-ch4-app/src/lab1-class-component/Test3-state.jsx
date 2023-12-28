import React from 'react'

class StateComponent extends React.Component {
    // 상태 데이터 선언 및 초기값 지정(state, setState는 예약어), useState는 함수형에서만 사용함 
    state = {
        change: true,
    }

    render() {
        return (
            <div>
                <h2>class State Test</h2>
                <button onClick={()=>{
                    //상태변경, setState()함수 사용 => 상태변경 => re-rendering (비동기 처리)
                    this.setState({change: !this.state.change})
                }}>state 상태 변경</button>
                {this.state.change ? (<p>true hello</p>) : (<p>false bye</p>)} 
            </div>
        )
    }
}

export default StateComponent