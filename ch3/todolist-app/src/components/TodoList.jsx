import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
    // 데이터 개수 만큼 하위 컴포넌트 준비
    let items = props.todoList.map((item)=>{
        // 동일한 컴포넌트가 여러개 나열된다면, 컴포넌트를 식별하기 위한 key 명시
        return <TodoListItem key={item.no} todoItem={item} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} />
    })
    return (
        <div className='row'>
            <div className='col'>
                <ul className='list-group'>{items}</ul>
            </div>
        </div>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    toggleDone: PropTypes.func,
    deleteTodo: PropTypes.func,
}

export default TodoList