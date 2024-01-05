import { useNavigate } from "react-router-dom";

//이 컴포넌트도 원한다면..connect 를 이용해서 redux 를 직접 이용가능하지만..
//TodoList 에서 redux 를 이용하고.. 전달되는 데이터를 그냥 이용만 하면 되는 것 같아서..
const TodoItem = ({ todoItem, deleteTodo, toggleTodo }) => {
  const navigate = useNavigate();
  let itemClassName = "list-group-item";
  if (todoItem.done) itemClassName += " list-group-item-success";
  return (
    <li className={itemClassName}>
      <span
        className={todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => toggleTodo(todoItem.id)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => navigate("/todos/edit/" + todoItem.id)}>
        편집
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => deleteTodo(todoItem.id)}>
        삭제
      </span>
    </li>
  );
};

export default TodoItem;
