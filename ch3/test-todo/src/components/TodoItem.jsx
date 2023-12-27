import PropTypes from 'prop-types'

const TodoItem = (props) => {    
    return (
        <li className={props.todoItem.done ? "list-group-item list-group-item-success" : "list-group-item"}>
            {props.todoItem.no}. 
            <span className={props.todoItem.done ? "todo-done pointer" : "pointer"} 
            onClick={()=>props.toggleTodo(props.todoItem.no)}>{props.todoItem.todo}</span>
            <span>{props.todoItem.done ? "(완료)" : ""}</span>
            <span className="float-end badge bg-secondary pointer" onClick={()=>props.deleteTodo(props.todoItem.no)}>삭제</span>
        </li>
    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
}
export default TodoItem