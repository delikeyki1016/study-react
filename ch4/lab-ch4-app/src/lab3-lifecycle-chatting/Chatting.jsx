// chatting => TCP/IP(socket 연결) protocol을 이용해야함, 서버와 커넥션을 계속 유지해야 할 때 사용
// http protocol은 요청 한번에 응답 한번 후 커넥션이 끊어진다. 

import React, {Component} from 'react'

class Chatting extends Component {
    // real dom을 핸들링하기 위한 식별자 
    chatRef = React.createRef()
    // 가급적 코드에서 real dom을 직접 핸들링하지 않는 것이 좋지만, real dom에서 직접 작업해야 하는 것들이 있다.
    // 예를 들어 브라우저 자동 스크롤, 브라우저 포커스를 특정 input에 자동포커스 하는 등.

    // 상태 데이터 정의
    // 유저가 입력한 채팅 글 리스트 : msgList / msg : controlled component를 위해서 정의
    state = {
        msgList: [],
        msg: ''
    }

    // 이벤트 콜백함수, 유저입력글을 controlled component로 사용하기 위해서
    setMsg = (e) => {
        // ... 은 자바스크립트 전개 연산자 (spread operator) 배열같이 데이터가 여러개 있을 때, 그 데이터를 쭉 풀어서 등록하고 자 할 때.(복제개념)
        this.setState({...this.state, msg: e.target.value})
    }
    // 이벤트 함수, 엔터키 입력 순간에 채팅글 하나 등록
    msgKeyup = (e) => {
        if(e.key === 'Enter') {
            // msg는 다시 ''로 초기화,  ...this.state.msgList 기존 리스트 값에 유저가 입력한 msg 값을 추가 
            this.setState({msg: '', msgList: [...this.state.msgList, this.state.msg]})
        }
    }

    // 자동스크롤 기능 추가 : 스크롤해야하는 사이즈 계산이 되어야 한다. 
    // 채팅글이 나오는 부분이 화면에서 얼마의 사이즈를 확보하는지를 획득 => offsetHeight
    // 전체 글이 출력되기 위해 얼마의 사이즈가 필요한 지를 획득 => scrollHeight
    // 스크롤해야되는 값 : scrollHeight - offsetHeight 
    // render()후 가상돔이 업데이트된 후 실제돔 업데이트 직전에 호출
    // 라이프사이클 함수 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // real dom 획득
        const chat = this.chatRef.current
        // 화면이 업데이트가 되었는데, 채팅 글이 이전과 다른지 비교. 
        if(chat !== null && prevState.msgList !== this.state.msgList) {
            // 이 함수에서 데이터를 리턴시키면, 이 데이터가 real dom update를 완료 후에 componentDidUpdate()가 콜된다.
            return chat.offsetHeight
        }
    }
    
    // 라이프사이클 함수
    // real dom이 업데이트 된 후에 작업할 때 
    // 3번째 매개변수가 getSnapshotBeforeUpdate에서 리턴 시킨 값
    componentDidUpdate(prevProps, prevState, snapshot) {
        const chat = this.chatRef.current
        if(snapshot > 0 && chat !== null) {
            // 스크롤 시킴
            chat.scrollTop = chat.scrollHeight - snapshot
        }
    }


    render() {
        return (
            <div>
                <h2>채팅목록</h2>
                {/* 채팅글이 나오는 부분을 real dom으로 제어해서 스크롤시키기 위해서 ref 설정 */}
                {/* 인라인스타일은 자바스크립트 객체문법으로 */}
                <div id='a' ref={this.chatRef} style={{width:400, height: 120, overflow:'auto', border:'1px solid black'}}>
                    {/* 채팅목록에서 채팅글을 반복 출력 */}
                    {this.state.msgList.map((item, index) => {
                        return <h2 key={index}>{item}</h2>
                    })}
                </div>
                {/* controlled componet */}
                <input type='text' value={this.state.msg} onChange={this.setMsg} onKeyUp={this.msgKeyup} />
            </div>
        )
    }
}

export default Chatting