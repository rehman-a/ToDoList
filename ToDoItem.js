import React from 'react'


export const ToDoItem = ({todo, onDelete}) => {
  
  return (
    <div className='text-center'>
      
      <>
      <h3 >{todo.title}</h3>
      <h3 >{todo.desc}</h3>
      <button className = "btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
      </>
      <br />
      <br />
    </div> 
  )
}

export default ToDoItem
