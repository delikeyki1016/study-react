import {useContext} from 'react'
import TodoContext from '../TodoContext'
import TodoListItem from './TodoListItem'

// 유지보수성을 결정짓는 인자는 많다.(코드절대량, 변수함수명칭 등...)
// 가장 큰 인자는 결합도!
// A클래스 내에서 B클래스를 사용한다면, 그 둘은 결합되어있다.
// 결합도를 낮출수록 유지보수성이 증대. 재사용성 증대
const TodoList = () => {
    const value = useContext(TodoContext)

    let items = value.state.todoList.map((item)=>{
        return <TodoListItem key={item.no} todoItem={item} deleteTodo={value.actions.deleteTodo} toggleDone={value.actions.toggleDone} />
    })
    return (
        <div className='row'>
            <div className='col'>
                <ul className='list-group'>{items}</ul>
            </div>
        </div>
    )
}

export default TodoList