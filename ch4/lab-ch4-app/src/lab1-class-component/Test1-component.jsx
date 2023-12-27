import React, { Component } from 'react'

// 클래스 컴포넌트 만들기 
class Sample extends Component {
    // 컴포넌트 클래스의 render()함수가 자동 호출되고 이 함수에서 리턴하는 것이 해당 컴포넌트의 화면이 된다. 
    render() {
        return (
            <div>
                Sample 클래스 컴포넌트 리턴화면입니다.
            </div>
        )
    }
}

// 하나의 파일하나 당 컴포넌트는 한개 선언되어있는 것이 유지보수성이 좋다. 이건 실습용이니 그냥 씀
class TestComponent extends Component {
    render() {
        return (
            <div>
                <h2>Class Component Test</h2>
                <Sample />
            </div>
        )
    }
}

export default TestComponent