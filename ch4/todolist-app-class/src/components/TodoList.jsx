import {Component} from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

class TodoList extends Component {

    // 랜더링 여부를 판단, 변경된 데이터를 이전 데이터를 비교한다.
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.todoList !== this.props.todoList) { //객체가 바뀐게 있다면 render하고 (값까지 비교한 것은 아니다)
            return true
        } else { // 없다면 하지마
            return false
        }
    }

    render() {
        console.log('랜더: TodoList...')
        let items = this.props.todoList.map((item)=>{
            return <TodoListItem key={item.no} todoItem={item} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} />
        })
        return (
            <div className='row'>
                <div className='col'>
                    <ul className='list-group'>{items}</ul>
                </div>
            </div>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    toggleDone: PropTypes.func,
    deleteTodo: PropTypes.func,
}

export default TodoList