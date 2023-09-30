import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    addTodo();
    event.target.task.focus();
  }
  function addTodo(todo) {
    //if no input, return
    if (todo.text.trim() === "") {
      return;
    }

    //add todo to list
    setTodos((prevItems) => prevItems.concat(todo));
  }

  function editTodo(id, newTodo) {
    // go through list, if item in list, change it to new val

    setTodos((prev) => prev.map((todo) => (todo.id === id ? newTodo : todo)));
  }

  function deleteTodo(id) {
    // Filter the array and excludes all with the key.
    setTodos((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function completeTodo(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      //return todo
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="d-flex-column justify-content-around">
        <div>
          <TodoForm
            promptText="What to do?"
            confirmText="Add"
            onSubmit={addTodo}
          />
        </div>
        <div>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </>
  );
}

export default TodoList;
