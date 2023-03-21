import React from "react";

const Todo = ({text, todo, todos ,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    
    return(
        <div class = "todo">
            <li class="todoItems"> {text} </li>
            <button onClick = {completeHandler} class="complete-button">
            <i class="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} class="trash-button">
            <i class="fas fa-trash"></i>
            </button>
        </div>
    )
}


export default Todo;