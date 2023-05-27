import React from 'react'
import TodoList from './TodoList'
const Todo = ({todos , setTodos , filterTodos}) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
       {
        filterTodos.map(todo => (
         
          <TodoList 
          text={todo.text} 
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          >

          </TodoList>

        ))
       }
       

      </ul>
      
    </div>
  )
}

export default Todo
