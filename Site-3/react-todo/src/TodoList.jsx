import { useState } from 'react';
import './TodoList.css'
import generateId from "./util_functions/id.js"


export default function TodoList() {

    const [tasksList, setTasksList] = useState([])
    
    function addTask(task){
        setTasksList(prev=>[...prev, task])
        //console.log(tasksList) //state doesnt update immediatly thats how react works, would need to use useeffect to listen for state change.
    }

    
    return (
        <div className="TodoList">
            <h1> Todo List </h1>
            
            <TodoForm
                addTask={addTask}
            />
            
            
            
            <TodoItemsList
                items={tasksList}
            />

            <p>Items: {tasksList.length}</p>
            
        </div>
    )
}

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
        //so its not as dispersed?  //TODO
        addTask({
            text: todoText,
            isCompleted: false,
            id: generateId()
        })
    }

    return (
        <form className='addItemInput' onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="addItemInput" id="addItemInput"
                placeholder='Add Item'
                autoFocus/>
                
                <input type="submit" aria-label="Add Item" 
                value="+" /> {/* TODO: add plus icon */}
        </form>
    )
}

function TodoItemsList({items}){

    const test = ["Item 1", "Item 2", "Item 3"]

    const listItemsOld = items.map(todoItem=> <li key={todoItem.id}>{todoItem.text}</li>)
    const listItems = items.map(todoItem=> <TodoItemDisplay key={todoItem.id} todoItem={todoItem}/>)
    //^^ todo: cache it or something so it doesnt have to rerender ones that are already there?
    return (
        <ul className='todoItemsList'>
            {listItems.reverse()}
        </ul>
    )
}

function TodoItemDisplay({todoItem}){
    return (
        <li className={`todoItem ${todoItem.isCompleted ? "completed" : ""}`}>
            {todoItem.text}
        </li>
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