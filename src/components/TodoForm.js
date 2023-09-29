import { useState } from "react"
import TodoList from "./TodoList";

//TODO: (lol) add ability to edit todos.
function TodoList() {

    const [taskInput, setTaskInput] = useState("")
    const [taskItems, setTaskItems] = useState([]);

    function handleSubmit(event){
        event.preventDefault()
        addTask(event)
        
    }
    function addTask(event) {
        event.preventDefault() //for submit button
        //if no input, return
        if (taskInput.trim() == "") {
            return
        }

        // object
        const newTask = {
            key: Date.now(),
            text: taskInput
        }

        // parameter is a callback
        setTaskItems((prevItems) => prevItems.concat(newTask))
        setTaskInput('')
        event.target.task.focus();
    }
    function completeTask(key){
        const task = findTask(key) 
        deleteTask(key)
    }


    function deleteTask(key) {
        // Filter the array and excludes all with the key.
        setTaskItems((prevItems) => prevItems.filter((item) => item.key !== key))
    }

    function editTask(key){
        
    }
    //given key, returns the task in the taskItems array.
    function findTask(key){
        const task = taskItems.find((task) => task.key === key)
        return task
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="mx-2 block font-weight-bold" htmlFor="task">What to do?</label>
                        <div>
                            <input className="mx-2" id="task" type="text" autoFocus value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                            <button className="mx-2 btn btn-primary" type="submit">Add</button>
                        </div>
                    </form>
                    
                </div>
            </div>


        </>
    )
}

export default TodoList