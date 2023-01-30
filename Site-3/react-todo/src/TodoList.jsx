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
        //ALTERNATIVELY: should this be in the parent function thats passed in 
        //and the parent function just gets called with todotext and generates id and the object itself 
        //so its not as dispersed?
        addTask({
            text: todoText,
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

function TodoItemList({items}){

    const test = ["Item 1", "Item 2", "Item 3"]

    const listItems = items.map(todoItem=> <li key={todoItem.id}>{todoItem.text}</li>)
    return (
        <ul>
            {[listItems]}
        </ul>
    )

    {items.length!==0 && <> <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li> </>}
}


export default function TodoList() {

    const [tasksList, setTasksList] = useState([])
    
    function addTask(task){
        setTasksList(prev=>[...prev, task])
        console.log(tasksList) //state doesnt update immediatly thats how react works, would need to use useeffect to listen for state change.
    }

    
    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            
            <TodoForm
                addTask={addTask}
            />
            
            <p>Items: {tasksList.length}</p>
            
            <TodoItemList
                items={tasksList}
            />
            
        </div>
    )
}













function ListRenderingTest(){
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
    ]
    const listItems = people.map(person=> <li key={generateId()}>{person}</li>)
    
    return (
        <ol style={{listStylePosition: "inside", paddingLeft:0}}>
            {listItems}
        </ol>
    )
}