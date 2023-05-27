import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({text , key , todos , setTodos,todo}) => {
 
    const deleteHandler=()=>{
           
        setTodos(todos.filter( (el) => el.id !==todo.id) );
    };

    const completeHandler=()=>{
         
        setTodos(todos.map( (item) => {

            if(item.id===todo.id)
            {
                return {
                    ...item , completed: !item.completed
                }
            }
            console.log(todo)
            return item;

        }))

    };

  return (
    <div className='todo'>
     <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
     <button className='complete-btn' onClick={completeHandler} ><FontAwesomeIcon icon={faCheck} /></button>
     <button className='trash-btn' onClick={deleteHandler}><FontAwesomeIcon icon={faTrash} /></button>
     
       
    </div>
  )
}

export default TodoList
