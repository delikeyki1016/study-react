import PropTypes from 'prop-types'
import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const todos = props.todoList.map((item) => {
        return <TodoItem key={item.no} todoItem={item} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />
    })
    return (
        <ul className='list-group'>
            {todos}
        </ul>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default TodoList