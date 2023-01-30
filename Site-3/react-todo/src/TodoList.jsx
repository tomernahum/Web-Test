import { useState } from 'react';
import './TodoList.css'
import generateId from "./util_functions/id.js"

function TodoForm({addTask}) {
    function handleSubmit(e) {
        e.preventDefault();

        const inputField = e.target.querySelector("#addItemInput")
        const todoText = inputField.value
        inputField.value = ""

        // could use OOP. Ie task class, contructor that makes the id itself. 
        // or could start with createTask(todoText) function, same thing really.
        // Maybe typescript has templates for this kind of thing
        addTask({
            todoText,
            isCompleted: false,
            id: generateId()
        })
    }

    return (
        <form className='addItemInput' onSubmit={handleSubmit}>
                <input type="text" name="addItemInput" id="addItemInput"
                placeholder='Add Item'
                autoFocus/>
                
                <input type="submit" aria-label="Add Item" 
                value="+" /> {/* TODO: add plus icon */}
        </form>
    )
}


function TodoList() {

    const [tasksList, setTasksList] = useState([])
    function addTask(task){
        console.log(task)
    }

    
    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            
            <TodoForm
                addTask={addTask}
            />
            
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </div>
    )
}

export default TodoList