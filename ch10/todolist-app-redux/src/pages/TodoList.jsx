import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import TodoActionCreator from "../redux/TodoActionCreator";
import { connect } from 'react-redux'

//{ states, callbacks } 는 컨테이너 컴포넌트를 사용했을 경우의 매개변수 
// const TodoList = ({ states, callbacks }) => {
// 리덕스사용시에는 mapStateToProps, mapDispatchToProps에서 선언한 key값을 매개변수로 받음
const TodoList = ({ todoList, deleteTodo, toggleTodo }) => {
  let todoItems = todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />;
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

// export default TodoList;

// 함수명은 임의, 매개변수가(state) redux에서 관리되는 상태, 해당 함수는 컴포넌트에서 상태를 props로 내려받기 위한 함수
const mapStateToProps = (state) => ({
  //앞의 todoList는 컴포넌트에서 사용할 이름(임의)
  //state.todoList : todoList는 reducer에 등록한 상태의 이름과 맞춘것
  //관리되는 상태가 여러개라면 쭉 나열한다.
  todoList: state.todoList
})

// 함수명의 임의, 매개변수는 redux에 액션을 발생시킬 수 있는 dispatcher 객체 
const mapDispatchToProps = (dispatch) => ({
  // 아래의 함수가 컴포넌트에 속성으로 추가
  // 컴포넌트에서 함수를 호출하면 액션발생
  deleteTodo: (id) => dispatch(TodoActionCreator.deleteTodo({id})),
  toggleTodo: (id) => dispatch(TodoActionCreator.toggleTodo({id}))
})

// TodoList 컴포넌트에 mapStateToProps, mapDispatchToProps의 값들을 속성으로 추가해서 redux를 이용하게 해주는 hof
// 전달함수는 위치 중요 : 첫번째 state, 두번째 dispatch => 여기서 전달할 필요없는 함수는 null로 추가 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
