import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <p className="text-center text-primary">By Justin Ho</p>
      <div className="d-flex justify-content-center">
        <div className="todo-background">
          <h1 className="text-center mb-4">Todo List</h1>

          <div className="d-flex-column justify-content-around">
            <div className="mb-4">
              <TodoForm
                promptText="What to do?"
                confirmText="Add"
                onSubmit={addTodo}
              />
            </div>
            <div>
              <Todo
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                setTodos={setTodos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
