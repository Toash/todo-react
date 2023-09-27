import { useState } from "react"
import TodoItems from "./TodoItems";

function TodoList(){

    const [taskInput,setTaskInput] = useState("")
    const [taskItems, setTaskItems] = useState([]);

    function addItem(event){
        event.preventDefault() //for submit button

        //if no input, return
        if(taskInput.trim() == ""){
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

    function deleteItem(key){
        // Filter the array and excludes all with the key.
        setTaskItems((prevItems) => prevItems.filter((item) => item.key !== key))
    }

    return (
        <>
            <h1>TodoList</h1>
            <form onSubmit={addItem}>
                <label htmlFor="task">What to do?</label>
                <input id="task" type="text" autoFocus value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
                <button type="submit">Add</button>
            </form>

            <TodoItems items={taskItems} delete={deleteItem}/>
        </>
    )
}

export default TodoList