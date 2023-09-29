/*
Displays an array of task items in ordered list
*/

import { useState } from "react";

function TodoList(props) {
    // the list of todos.
    const [todos, setTodos] = useState([])
    const todoItems = props.items;

    //goes through every item in the todoItems array and adds them as list item
    return (
        <ul className="d-inline-flex flex-column">
            {todoItems.map((item) =>
                <div className="d-flex my-1">
                                        <button className="btn btn-primary" onClick={() => props.complete(item.key)}>Complete</button>
                    <li key={item.key}>{item.text}</li>

                    <button className="btn btn-danger" onClick={() => props.delete(item.key)}>Delete</button>
                    
                </div>
            )}
        </ul>
    )
}

export default TodoList