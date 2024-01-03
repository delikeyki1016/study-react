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

export default React.memo(TodoList)