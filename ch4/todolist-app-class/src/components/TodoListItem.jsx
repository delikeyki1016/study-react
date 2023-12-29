import React from 'react'
import PropTypes from 'prop-types'

// class TodoListItem extends React.Component {
class TodoListItem extends React.PureComponent {

    // React.Component를 상속받을 때 사용. 
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.todoItem !== this.props.todoItem) return true 
    //     else return false
    // }

    // React.PureComponent를 상속받으면, shouldComponentUpdate를 구현하지 않아도 된다.
    // PureComponent는 Component의 서브 클래스이고, shouldComponentUpdate()함수가 오버라이드되어,
    // props, state 객체 비교 알고리즘이(얕은비교) 이미 구현되어있는 클래스

    // 이미 랜더링된 아이템들은 재랜더링되지 않고, 신규 추가 아이템만 렌더됨.
    
    render() {
        console.log('랜더: TodoListItem...')
        let itemClassName = 'list-group-item'
        if(this.props.todoItem.done) itemClassName += ' list-group-item-success'

        return (
            <li className={itemClassName}>
                <span className={this.props.todoItem.done ? 'todo-done pointer' : 'pointer'} 
                onClick={()=> this.props.toggleDone(this.props.todoItem.no)}>
                    {this.props.todoItem.todo}
                    {this.props.todoItem.done ? "(완료)" : ""}
                </span>
                <span className='float-end badge bg-secondary pointer' 
                onClick={()=> this.props.deleteTodo(this.props.todoItem.no)}>삭제</span>
            </li>
        )
    }
}

TodoListItem.propTypes = {
    todoItem: PropTypes.object,
    toggleDone: PropTypes.func,
    deleteTodo: PropTypes.func,
}

export default TodoListItem