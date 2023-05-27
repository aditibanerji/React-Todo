
import React from 'react';
import { useState , useEffect } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';


function App() {

  const[inputText , setInputText] = useState('');
  const[todos , setTodos] = useState([]);  
  const[status , setStatus] = useState('all');
  const[filterTodos , setFilterTodos] = useState([]);

  
  const filterHandler = () =>{

    switch(status)
    {
       case 'completed' :
        setFilterTodos(todos.filter( todo => todo.completed===true ))
        break;

        case 'uncompleted' :
          setFilterTodos(todos.filter( todo => todo.completed===false ))
          break;

          default :
          setFilterTodos(todos);
          break;
  

    }
  };

  useEffect( ()=>{
    filterHandler();

  },[todos,status])

  
  return(
    

   <div className='App'>
        <h1>Todo list </h1> 
        <Form 
        inputText={inputText} 
        todos = {todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        >
        </Form>  
      
        <Todo 
        todos={todos} 
        setTodos={setTodos}
        filterTodos={filterTodos}
        >
        </Todo>
   </div>
    

  );

}


export default App;
