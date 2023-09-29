/*
Displays an array of task items in ordered list
*/

function TodoItems(props) {
    // the list of todos.
    const todoItems = props.items;

    //goes through every item in the todoItems array and adds them as list item
    return (
        <ul className="d-inline-flex flex-column">
            {todoItems.map((item) =>
                <div className="d-flex my-1">
                    <li key={item.key}>{item.text}</li>
                    <button onClick={() => props.delete(item.key)}>Delete</button>
                </div>
            )}
        </ul>
    )
}

export default TodoItems