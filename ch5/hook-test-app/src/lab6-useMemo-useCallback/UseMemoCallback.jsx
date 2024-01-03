import {useState, useMemo, useCallback} from 'react'

// 개발자 함수
const getTodoListCount = (todoList) => {
    console.log('call getTodoListCount:', todoList.length)
    return todoList.length
}

// 컴포넌트 선언 
// 이 컴포넌트의 상태가 2개
// 리랜더링시에, 함수호출, 함수생성이 계속 일어난다.
// 유저가 글을 입력할 때는 getTodoListCount 해당 함수가 호출,실행될 이유가 없다. ==> useMemo

const UseMemoCallbackComponent = () => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("") // 유저입력, controlled component

    // 빈번하게 호출되는 함수를 useMemo()로 정의
    // 함수를 직접호출하지않고, useMemo의 리턴값을 이용. 두번째 매개변수가 변경된 경우에만 함수를 호출하고 그 값을 캐싱
    // todoList가 변경될 때에만 getTodoListCount을 실행
    const memoCount = useMemo(()=>getTodoListCount(todoList), [todoList])

    // 이벤트 함수 
    // 컴포넌트가 리랜더링될 때 불필요하게 생성되지 않게 하기 위해서(유저가 글 입력 시에는 다시 생성될 필요가 없다.) 함수를 캐싱함 
    // todoList가 변경될 때만 생성해라 
    const addTodo = useCallback((todo) => {
        console.log('addTodo함수')
        // 기존 todolist 복제하여 신규값 추가 
        let newTodoList = [...todoList, {id: new Date().getTime(), todo: todo}]
        setTodoList(newTodoList)
        setTodo("")
    }, [todoList])

    const deleteTodo = useCallback((id) => {
        let index = todoList.findIndex((item)=> item.id === id)
        let newTodoList = [...todoList]
        newTodoList.splice(index, 1)
        setTodoList(newTodoList)
    }, [todoList])

    return (
        <div>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={()=>addTodo(todo)}>추가</button>
            <br />
            <ul>
                {todoList.map((item)=> (
                    <li key={item.id}>
                        {item.todo}
                        <button onClick={()=>deleteTodo(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            {/* useMemo 이용 전 */}
            {/* <div>todo count: {getTodoListCount(todoList)}</div> */}
            <div>todo count: {memoCount}</div>
        </div>
    )
}

export default UseMemoCallbackComponent