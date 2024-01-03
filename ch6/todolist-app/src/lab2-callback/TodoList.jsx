import React from 'react'
import TodoListItem from "./TodoListItem"

const TodoList = (props) => {
    console.log(`TodoList 리랜더링`)

    return (
        <ul>
            {
                props.todoList.map((item)=> (
                    <TodoListItem key={item.id} todoListItem={item} deleteTodo={props.deleteTodo} />
                ))
            }
        </ul>
    )
}

// React.memo를 사용했음에도 상위에서 함수를(deleteTodo) props로 전달하면, 글 입력 시에 불필요하게 컴포넌트가 리랜더링 되고 있다.
// 상위가 리랜더링되면서 함수가 새로 생성된다. 즉 상위의 props가 변경되었다고 보기 때문에.
// ==> 상위 리랜더링 시 상위의 함수가 불필요하게 생성되지 않고 useCallback() 훅을 이용
export default React.memo(TodoList)