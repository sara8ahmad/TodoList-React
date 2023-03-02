import React from 'react'

const TodoItem = ({todos , handleEdit , remove , handleComplete ,saveTodo, editRef}) => {

  
  return (
    <div>
        <h3>Todo Items</h3>
        <ol>
            {
                todos.map((todo,index) => <li key={index}>
              
                  {!todo.Editting?
                  <>
                    <p style={{ textDecoration : todo.isComplete ? "line-through" : "" }}> Item : {todo.text} </p>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>remove(index)}>Remove</button>
                    <button onClick={()=>handleComplete(index)}>Complete</button>
                  </>
                
                    :
                  <>  
                    <input defaultValue={todo.text} ref={(element) => editRef.current[index] = element} />
                    <button onClick={()=>saveTodo(index)}>SetEdit</button>
                  </>
                     }
    
                </li>

                )
            }
        </ol>
    </div>
  )
}

export default TodoItem;