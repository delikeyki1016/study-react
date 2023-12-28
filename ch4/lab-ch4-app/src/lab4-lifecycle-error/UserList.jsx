import React, {Component} from 'react'
import PropTypes from 'prop-types'

// 채팅 유저 목록 컴포넌트
class UserList extends Component {
    render(){
        return (
            <ul>
                {this.props.users.map((userId) => ( // 태그를 작성할 때, 그러나 () 안써도 무방. {}로 작성하려면 return 시키면 된다.
                    <li key={userId}>{userId}</li>
                ))}
            </ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
}

export default UserList