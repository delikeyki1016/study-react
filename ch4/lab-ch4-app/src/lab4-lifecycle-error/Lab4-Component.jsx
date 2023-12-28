import React from 'react'

import ErrorBoundary from './ErrorBoundary'
import UserList from './UserList'

class ChatApp2 extends React.Component {
    render() {
        return (
            // <div>~</div> 내에서 나오는 에러를 처리하겠다. 정상출력이면 this.props.children을 출력해라
            <ErrorBoundary>
                <div>
                    {/* 정상상황 테스트 */}
                    {/* <UserList users={['gildong', 'kim']} /> */}
                    {/* 에러상황 테스트 */}
                    <UserList users={'gildong'} /> 
                </div>
            </ErrorBoundary>
        )
    }
}

export default ChatApp2