import React, { useRef } from "react";
import './App.css';
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
const [todos , setTodos] = useState([]);
const [ todo , setTodo ] = useState({
  text: "",
  isComplete: false,
  Editting: false,
})

const editRef = useRef({});

const handleTodo = (todo) => {
  setTodos([...todos,todo]);
}

const remove = (inx)=>{
  const removeTodo = [...todos];
  removeTodo.splice(inx,1)
  setTodos(removeTodo);
}

const handleComplete = (inx)=> {
  const list = [...todos];
  list[inx].isComplete = !list[inx].isComplete;
  setTodos(list);
}
const handleEdit = (inx)=> {
  const editList = [...todos];
  editList[inx].Editting = !editList[inx].Editting;
  setTodos(editList);

}

const saveTodo = (inx)=> {
  const saveList = [...todos];
  saveList[inx].Editting = !saveList[inx].Editting;
  saveList[inx].text = editRef.current[inx].value;
  setTodos(saveList);
}  



  return (
    <div className="App">
      <header className="App-header">
        <TodoForm todos={todos} handleTodo={handleTodo} todo={todo} setTodo={setTodo} />
        <TodoItem todos={todos} handleTodo={handleTodo} remove={remove}
         handleComplete={handleComplete} handleEdit={handleEdit} saveTodo={saveTodo} editRef={editRef}/>
      </header>
    </div>
  );
}

export default App;
