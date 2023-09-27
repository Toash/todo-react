/*
Displays an array of task items in ordered list
*/

function TodoItems(props){
    // the list of todos.
    const todoItems = props.items;

    //goes through every item in the todoItems array and adds them as list item
    return(
        <ul>
            {todoItems.map((item) => <li key={item.key}>
                {item.text}
                <button onClick={() => props.delete(item.key)}>Delete</button>
                </li>)}
        </ul>
    )
}

export default TodoItems