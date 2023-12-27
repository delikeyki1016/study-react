import {useState} from 'react'
// 불변성 체크 모듈, 상태 변경을 체크해서 해당 상태를 이용하는 컴포넌트만 re-rendering 되게 처리해 주는 모듈
import {produce} from 'immer'
import App from './App'

// 하위 컴포넌트들을 위한 공통의 상태 유지 및 상태 변경을 목적으로 하는 컴포넌트 => 컨테이너 컴포넌트 
const AppContainer = () => {
    // 상태 데이터
    const [todoList, setTodoList] = useState([
        {no: 1, todo: 'React 학습', done: false},
        {no: 2, todo: 'Algorithm 문제풀이', done: true},
        {no: 3, todo: 'Node 서버 연동 실습', done: false},
        {no: 4, todo: 'Javascript 학습', done: false},
    ])

    let lastNo = todoList[todoList.length - 1].no
    const [num, setNum] = useState(lastNo)
    // console.log('초기num', num) // num = 4

    // 상태 변경 액션 
    // 어디선가 이 함수를 호출하면서 매개변수로 새로운 todo 데이터를 전달하면 기존 상태에 매개변수 상태를 하나 추가 
    const addTodo = (todo) => {
        // produce - immer 모듈의 api
        // 첫번째 매개변수: 이전상태, 두번째 매개변수: 새로운 상태를 만드는 개발자 함수
        // produce가 todoList를 자동으로 복사하여 draft에 전달함
        
        //console.log('setNum후의 num', num) //여기서도 4가 찍힘 
        let newTodoList = produce(todoList, (draft) => {
            setNum(num+1)
            // draft.push({no: new Date().getTime(), todo: todo, done: false})
            draft.push({no: num + 1, todo: todo, done: false})
        })
        setTodoList(newTodoList)
    }

    const deleteTodo = (no) => {
        // 매개변수가 각 todo를 식별하는 식별자, todo는 todoList의 각 아이템, 즉 삭제할 번호가 몇번째 인덱스인지 알아냄
        let index = todoList.findIndex((todo) => todo.no === no) 
        let newTodoList = produce(todoList, (draft) => {
            draft.splice(index, 1)
        })
        setTodoList(newTodoList)
    }

    const toggleDone = (no) => {
        let index = todoList.findIndex((todo) => todo.no === no)
        let newTodoList = produce(todoList, (draft)=>{
            draft[index].done = !draft[index].done //true면 false로 false면 true로 
        })
        setTodoList(newTodoList)
    }

    return (
        <div>
            {/* 상태 데이터와 액션을 하위 컴포넌트에 props로 넘김 */}
            <App todoList={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleDone={toggleDone} />
        </div>
    )
}

export default AppContainer