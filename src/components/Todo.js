import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function submitUpdate(text) {
    editTodo(edit.id, text);

    //reset edit
    setEdit({
      id: null,
      text: "",
    });
  }

  //Instead of rendering todos, render an edit.
  // since edit is a state and is changed, it gets reevaluated.
  if (edit.id) {
    //creates the edit state in the todoform
    return (
      <TodoForm
        promptText="Edit"
        confirmText="Confirm"
        onSubmit={submitUpdate}
      />
    );
  }

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <div
          className={
            index === selectedIndex
              ? "list-group-item active"
              : "list-group-item"
          }
          key={index}
          onMouseOver={() => setSelectedIndex(index)}
          onMouseOut={() => setSelectedIndex(-1)}
        >
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => setEdit({ id: todo.id, text: todo.text })}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </ul>
  );
}
export default Todo;
