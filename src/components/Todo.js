import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Todo({ todos, setTodos, completeTodo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const [complete, setComplete] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function submitUpdate(text) {
    editTodo(edit.id, text);

    //reset edit
    setEdit({
      id: null,
      text: "",
    });
  }
  // ?
  function onDragEnd(result) {
    if (!result.destination) return;

    //put the drag item into the proper destination.
    const updatedTodos = [...todos];
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(updatedTodos);
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
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="my-droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="todo-item p-2"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="w-75">
                            <div className=" text-break">{todo.text}</div>
                          </div>
                          <div className="d-flex flex-wowrap align-items-start">
                            <button
                              className="btn btn-sm btn-secondary mx-2"
                              onClick={() =>
                                setEdit({ id: todo.id, text: todo.text })
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => deleteTodo(todo.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default Todo;
