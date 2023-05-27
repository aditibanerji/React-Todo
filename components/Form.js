import React from 'react'

const Form = ({setInputText, inputText,todos,setTodos , setStatus}) => {

  const inputTextHandler = (e)=>{

   setInputText(e.target.value)
   

  };

  const submitHandler=(e)=>{
    e.preventDefault()
    setTodos([
      ...todos , {text: inputText , completed : false , id: Math.random()*1000}
    ]);
    setInputText("");
     

  };

  const statusHandler = (e) =>{

    setStatus(e.target.value)

  };



  return (
    <form>
        <input type="text" className='todo-input' onChange={inputTextHandler} value={inputText}></input>
        <button  className="todo-button"type="submit" onClick={submitHandler}>
        +
        </button>

        <div className='select'>
            <select name="todos" className="select-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>

        </div>
    </form>

  
  )
}

export default Form
