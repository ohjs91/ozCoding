import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodolist] = useState([
    { id: 0, content: "밥 먹기" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "실시간 세션" },
  ]);
  return (
    <>
      <TodoList todoList={todoList} setTodolist={setTodolist} />
      <TodoInput todoList={todoList} setTodolist={setTodolist} />
    </>
  );
}

function TodoList({ todoList, setTodolist }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodolist={setTodolist} />
      ))}
    </ul>
  );
}
function Todo({ todo, setTodolist }) {
  const [inputValue, setInputvalue] = useState("");

  return (
    <li>
      No.{todo.id} {todo.content}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTodolist((prev) => {
            return prev.map((el) =>
              el.id === todo.id ? { ...el, content: inputValue } : el
            );
          });
          setInputvalue("");
        }}
      >
        수정하기
      </button>
      <button
        type="button"
        onClick={() => {
          setTodolist((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
    </li>
  );
}
function TodoInput({ todoList, setTodolist }) {
  const [inputValue, setInputvalue] = useState("");

  function newTodoAdd() {
    const newTodo = { id: todoList.length + 1, content: inputValue };

    setTodolist([...todoList, newTodo]);
    setInputvalue("");
  }

  return (
    <>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button type="button" onClick={newTodoAdd}>
        추가하기
      </button>
    </>
  );
}
export default App;
