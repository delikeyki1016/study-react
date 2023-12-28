import React from 'react'
import Clock from "./Clock"

class ClockApp extends React.Component {
    state = {
        clockVisible: false
    }
    render() {
        // 토글버튼에 따라 시계가 마운트되고 언마운트되는 상황
        return (
            <div>
                <h2>간단한 시계</h2>
                <button onClick={()=> this.setState({clockVisible: !this.state.clockVisible})}>clock show/hide toggle</button>
                <hr />
                {this.state.clockVisible ? <Clock formatString={"HH:mm:ss"} /> : ""}
            </div>
        )
    }
}

export default ClockApp