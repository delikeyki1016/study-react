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

// memo함수의 두번째 매개변수에 re-rendering 할 것인지를 결정하는 개발자 로직을 가지는 함수를 추가
// 항목의 중간을 삭제하게되면, 그 하위에 있는 모든 것이 다 제거되는 문제가 있다.
// 두번째 매개변수를 이용하면 그 컴포넌트에 자신들이 생성될 때 사용했던 props가 고정으로 지정되게 된다.
// 그래서 중간을 삭제하면 되면 자신이후에 추가되었던 컴포넌트 정보가 없어서 그 하위까지 같이 삭제가 되는 문제가 있다. 
export default React.memo(TodoListItem, (prevProps, nextProps)=>{
    return prevProps.todoListItem === nextProps.todoListItem // 값을 비교, 동일하면 리랜더링 하지마라
})