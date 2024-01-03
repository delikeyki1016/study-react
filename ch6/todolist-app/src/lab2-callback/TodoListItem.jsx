import React from 'react'

const TodoListItem = (props) => {
    console.log(`TodoListItem 리랜더링: ${props.todoListItem.todo}`)
    return (
        <li>
            <span>{props.todoListItem.todo}</span>
            <button onClick={()=> props.deleteTodo(props.todoListItem.id)}>삭제</button>
        </li>
    )
}

export default React.memo(TodoListItem)