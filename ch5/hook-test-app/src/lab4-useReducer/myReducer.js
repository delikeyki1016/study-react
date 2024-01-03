import {produce} from 'immer'

// 공통 상태 정의

// 액션 type 정의 => 컴포넌트에서 reducer에게 전달하는 input(상태관리를 해달라는 요청)
// 상태관리를 구분하기 위한 용도로 사용
export const TODO_ACTION = {
    ADD : "할일 추가",
    DELETE : "할일 삭제"
}

// ActionCreator : 액션을 좀 더 쉽게 사용하기 위한 액션 생성자 역할. (필수는 아니지만, 대부분 사용)
export const TodoActionCreator = {
    // 어디선가 액션을 만들고자 할때 이 함수를 호출한다.
    // type : action 구분자 / payload : reducer에게 전달되는 데이터 
    addTodo: (todo) => ({type: TODO_ACTION.ADD, payload: {todo: todo}}),
    deleteTodo: (id) => ({type: TODO_ACTION.DELETE, payload: {id: id}})
}

// reducer: state 업데이트 방식을 지정하는 순수함수 
// reducer 함수 정의(어디선가 액션을 발생시키면, 새로운 상태를 리턴시킴) => 순수함수로 만들어야 함 
// state : 이전 상태값, 참조만 한다. 
// action : 발생된 action, 상태변경요청. 즉 {type: TODO_ACTION.ADD, payload: {todo: todo}}
export const TodoReducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
        case TODO_ACTION.ADD:
            // 기존 상태를 변경하는 것이 아니라, 새로운 상태를 만들어서 리턴한 것 
            return produce(state, (draft) => {
                draft.push({id: new Date().getTime(), todo: action.payload.todo})
            })
            // immer를 안쓴다면, 아래처럼 써도 같음 
            // return [...state, {id: new Date().getTime(), todo: action.payload.todo}]
        case TODO_ACTION.DELETE:
            let index = state.findIndex((item) => item.id === action.payload.id)
            // 새로운 상태에서 삭제 
            return produce(state, (draft) => {
                draft.splice(index, 1)
            })
        // 기존 상태 리턴 
        default:
            return state
    }
}