import { useState, useReducer } from "react";
import { produce } from "immer"

// 리듀서 상태관리 type 정의
const TODO_ACTION = {
    ADD : "할일 추가",
    DELETE : "할일 삭제"
}

// 리듀서 액션 생성자
const TodoCreatAction = {
    addTodo: (todo) => ({type:TODO_ACTION.ADD, payload:{todo: todo}}),
    deleteTodo: (no) => ({type:TODO_ACTION.DELETE, payload:{no: no}})
}

// 리듀서 함수 정의
const myReducer = (state, action) => {
    switch(action.type) {
        case TODO_ACTION.ADD:
            return produce(state, (draft) => {
                draft.push({no: new Date().getTime(), todo: action.payload.todo})
            })
        case TODO_ACTION.DELETE:
            let index = state.findIndex((item) => item.no === action.payload.no)
            return produce(state, (draft) => {
                draft.splice(index, 1)
            })
        default:
            return state
    }
}

const UseReducerTest = () =>{
    const initialTodoList = [
        {no: 1, todo: '공부'},
        {no: 2, todo: '복습'},
        {no: 3, todo: '영화'},
    ]
    const [state, dispatch] = useReducer(myReducer, initialTodoList)

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        dispatch(TodoCreatAction.addTodo(todo))
    }    

    const deleteTodo = (no) => {
        dispatch(TodoCreatAction.deleteTodo(no))
    }

    return (
        <div>
            <ul>
                <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <button onClick={addTodo}>추가</button>
                {state.map((item) => (
                    <li key={item.no}>{item.todo}<button onClick={()=>deleteTodo(item.no)}>삭제</button></li>    
                ))}
            </ul>
        </div>
    )
}

export default UseReducerTest