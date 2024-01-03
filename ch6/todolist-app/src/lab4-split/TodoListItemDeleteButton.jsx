import React from 'react'

const TodoListItemDeleteButton = (props) => {
    console.log(`TodoListItemDeleteButton 리랜더링`)

    return <button onClick={()=>props.deleteTodo(props.id)}>삭제</button>
}

export default React.memo(TodoListItemDeleteButton)