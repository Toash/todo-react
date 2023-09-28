import { useState } from "react"
import TodoItems from "./TodoItems";

function TodoList() {

    const [taskInput, setTaskInput] = useState("")
    const [taskItems, setTaskItems] = useState([]);

    function addItem(event) {
        event.preventDefault() //for submit button

        //if no input, return
        if (taskInput.trim() == "") {
            return
        }

        // object
        const newItem = {
            key: Date.now(),
            text: taskInput
        }

        // parameter is a callback
        setTaskItems((prevItems) => prevItems.concat(newItem))


        setTaskInput('')

        event.target.task.focus();
    }

    function deleteItem(key) {
        // Filter the array and excludes all with the key.
        setTaskItems((prevItems) => prevItems.filter((item) => item.key !== key))
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <form onSubmit={addItem}>
                        <label className="mx-2 block font-weight-bold" htmlFor="task">What to do?</label>
                        <div>
                            <input className="mx-2" id="task" type="text" autoFocus value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                            <button className="mx-2" type="submit">Add</button>
                        </div>
                    </form>
                    <TodoItems items={taskItems} delete={deleteItem} />
                </div>
                <div>
                    <h2>Completed</h2>
                </div>
            </div>


        </>
    )
}

export default TodoList