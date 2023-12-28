import React, {Component} from 'react'

// 에러처리 용도 컴포넌트
// 하위 어디선가 발생한 에러를 처리하자
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    // 에러가 발생되면 자동호출되는 함수, 여기서 리턴하는 값으로 state가 자동 변경된다. 리랜더링 
    static getDerivedStateFromError(error) {
        return {hasError: true, errorMsg: error.message}
    }

    // 에러 발생 시 자동 호출, 주로 로깅 역할
    componentDidCatch(error, errorInfo) {
        console.log('에러발생!')
        console.log('에러name:', error.name)
        console.log('에러msg:', error.message)
        console.log('에러stack:', errorInfo.componentStack)
    }

    render() {
        // 에러가 발생했을 경우에만 유저에게 보여줘야하는 목적으로. 
        if(this.state.hasError) {
            return (
                <div>
                    <h2>에러발생</h2>
                    <p>에러 메시지: {this.state.errorMsg}</p>
                </div>
            )
        }
        // 에러가 발생하지 않았다면, 나의 하위에 붙은 컴포넌트대로 화면이 나오게 하자. 
        return this.props.children
    }
}

export default ErrorBoundary
