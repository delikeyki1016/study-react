import React, {useState} from 'react'
import { produce } from 'immer'

// 앱 전역에서 이용할 데이터 공유 객체 context 준비
const TodoContext = React.createContext(null)

// 앱전역에서 사용하고자 하는 상태, 상태변경함수 등을 가지는 컴포넌트 선언
export const TodoProvider = (props) => {
    const [todoList, setTodoList] = useState([
        {no:1, todo:'react study1', done: false},
        {no:2, todo:'react study2', done: true},
        {no:3, todo:'react study3', done: false},
    ])

    // 상태변경함수, 하위 어디선가 호출될 것이다.
    const addTodo = (todo) => {
        // 상태데이터는 이전 것을 변경하는 것이 아니라, 이전 것을 참조해서 새로운 것을 만듦 => 불변성으로 관리하는 것이 좋다.
        // 이전상태를 복사해서 새로운 것을 만들고, 그 새로운 곳에 추가,제거,수정 등을 한다.
        // 그때 spread operator(...)을 이용해도 되고, immer 라이브러리를 이용해도 된다.
        const newTodoList = produce(todoList, (draft) => {
            draft.push({no: new Date().getTime(), todo: todo, done: false})
        })
        setTodoList(newTodoList)
    }

    const deleteTodo = (no) => {
        const index = todoList.findIndex((item) => item.no === no)
        const newTodoList = produce(todoList, (draft) => {
            draft.splice(index, 1)
        })
        setTodoList(newTodoList)
    }

    const toggleDone = (no) => {
        const index = todoList.findIndex((item) => item.no === no)
        const newTodoList = produce(todoList, (draft) => {
            draft[index].done = !draft[index].done
        })
        setTodoList(newTodoList)
    }

    // 자신들이 가지고 있는 상태 데이터,상태변경함수 등을 하위에 공개하기 위해서 context에 추가할 정보
    const values = {
        state: {todoList},
        actions: {addTodo, deleteTodo, toggleDone}
    }

    // 이곳에서 가지는 상태 및 상태변경함수등을 준비한 context에 등록
    // 자신의 정보를 하위에 공개하는 리턴
    // props.children에 추가된 모든 하위 컴포넌트가 context에 추가된 정보를 이용할 수 있다.
    return <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
}

export default TodoContext

