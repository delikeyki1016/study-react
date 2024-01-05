// 액션 타입 선언, 액션 타입은 액션을 구분하기 위한 문자열
// 이 액션에 의해 실행되는 함수명과 전혀 관련이 없는 임의 문자열 
export const TODO_ACTION = {
    ADD_TODO: "addTodo",
    DELETE_TODO: "deleteTodo",
    TOGGLE_TODO: "toggleTodo",
    UPDATE_TODO: "updateTodo",
}

// 액션을 만들어 주는 함수
// 각 컴포넌트에서는 이 함수를 호출해서 액션을 만들고 그 액션을 redux에 dispatch(보내다)
// 하나의 액션에는 {액션타입, 전달데이터}
const TodoActionCreator = {
    addTodo: (todoItem) => {
        return {type: TODO_ACTION.ADD_TODO, payload: todoItem}
    },
    deleteTodo: (todoItem) => {
        return {type: TODO_ACTION.DELETE_TODO, payload: todoItem}
    },
    toggleTodo: (todoItem) => {
        return {type: TODO_ACTION.TOGGLE_TODO, payload: todoItem}
    },
    updateTodo: (todoItem) => {
        return {type: TODO_ACTION.UPDATE_TODO, payload: todoItem}
    }
}

export default TodoActionCreator
