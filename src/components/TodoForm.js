import React from 'react';

const TodoForm = ({todos,handleTodo,todo,setTodo}) => {
        
const handleSubmit = (e)=> {
  e.preventDefault();
  handleTodo(todo);
  setTodo( {...todo,text : ""})
}

const handleChange =(e)=> {
    const {name , value} = e.target;
    setTodo({...todo, [name]: value})
}
console.log(todos);

  return (
    <div>
    <h1>TodoForm</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={todo.text} name="text" onChange={handleChange} placeholder="Enter Todo Item"/>
        <button>Submit</button>
    </form>
    </div>

  )
}

export default TodoForm;