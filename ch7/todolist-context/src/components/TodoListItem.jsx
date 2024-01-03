import PropTypes from 'prop-types'

// 이곳에서도 props와 관련된 것을 제거하고 Context를 이용해서 필요한 데이터를 직접획득 가능하기는 하다.
// 그러나 모든 곳에서 context를 사용하는 것은 좋아보이지않는다. 해당 컴포넌트는 상위에서 결정한 데이터를 단순히 화면에 찍는 역할이기 때문에
// Context 종속성을 제거하고, props로 이용하는 것이 더 좋을 수 있다.
const TodoListItem = (props) => {
    let itemClassName = 'list-group-item'
    if(props.todoItem.done) itemClassName += ' list-group-item-success'

    return (
        <li className={itemClassName}>
            <span className={props.todoItem.done ? 'todo-done pointer' : 'pointer'} onClick={()=> props.toggleDone(props.todoItem.no)}>
                {props.todoItem.todo}
                {props.todoItem.done ? "(완료)" : ""}
            </span>
            <span className='float-end badge bg-secondary pointer' onClick={()=> props.deleteTodo(props.todoItem.no)}>삭제</span>
        </li>
    )
}

TodoListItem.propTypes = {
    todoItem: PropTypes.object,
    toggleDone: PropTypes.func,
    deleteTodo: PropTypes.func,
}

export default TodoListItem