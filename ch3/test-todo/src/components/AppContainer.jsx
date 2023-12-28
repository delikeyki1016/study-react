import {useState} from 'react'
import {produce} from 'immer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const AppContainer = () => {
    const [todoList, setTodoList] = useState([
        {no: 1, todo:'react 공부', done: false},
        {no: 2, todo:'밥먹기', done: true},
        {no: 3, todo:'복습하기', done: false},
    ])

    let lastNo = todoList[todoList.length - 1].no
    const [num, setNum] = useState(lastNo)

    // 할일등록 컴포넌트 
    const addTodo = (todo) => {
        setNum((num)=>num + 1) // 동기적처리를 해도 num+1이 안되는 이유...
        let newTodoList = produce(todoList, (draft)=>{
            draft.push({no: num, todo: todo, done: false})
        })
        setTodoList(newTodoList)
    }

    // 할일 완료 컴포넌트
    const toggleTodo = (no) => {
        let index = todoList.findIndex((item)=>item.no === no)
        let newTodoList = produce(todoList, (draft)=>{
            draft[index].done = !draft[index].done
        })
        setTodoList(newTodoList)
    }

    // 할일 삭제 컴포넌트 
    const deleteTodo = (no) => {
        let index = todoList.findIndex((item)=>item.no === no)
        let newTodoList = produce(todoList, (draft)=>{
            draft.splice(index, 1)
        })
        setTodoList(newTodoList)
    }

    return (
        <div className='w-75 m-auto'>
            <div className='card'>
                <div className="card-body">
                    <AddTodo addTodo={addTodo} />
                </div>
                <div className="card-body">
                    <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>
    )
}

export default AppContainer