import React, { useReducer, useState } from "react"
import { TodoActionCreator, TodoReducer } from  './myReducer'

let idNow = new Date().getTime()
const initialTodoList = [
    {id: idNow, todo: '운동'},
    {id: idNow + 1, todo: '공부'},
    {id: idNow + 2, todo: '영화'},
]

const UseReducerComponent = () => {
    // todoList : reducer에 의해 관리되는 상태, 초기값 initialTodoList
    // dispatch : reducer(TodoReducer)에게 일을 시키기 위해 액션을 발생시키는 함수
    const [todoList, dispatch] = useReducer(TodoReducer, initialTodoList)

    // 유저 글 입력 관리
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        // reducer에게 액션을 발생시켜서, reducer에 의해 상태가 관리되게
        // reducer에게 일을 시키는 유일한 방법은 dispatch함수로 액션을 발생
        dispatch(TodoActionCreator.addTodo(todo))
        setTodo("")
    }

    const deleteTodo = (id) => {
        dispatch(TodoActionCreator.deleteTodo(id))
    }

    return (
        <div>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={addTodo}>add todo</button>
            <ul>
                { todoList.map((item) => (
                    <li key={item.id}>
                        {item.todo}
                        <button onClick={()=>deleteTodo(item.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducerComponent