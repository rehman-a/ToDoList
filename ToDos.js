import React from 'react'
import ToDoItem from './ToDoItem'

export const ToDos = (props) => {
  return (
    <div className='text-center my-3'>
      <h3 >ToDos List</h3>  

      {props.todos.map((todo, onDelete) => {
        return <ToDoItem todo={todo} key = {todo.sno} onDelete = {props.onDelete} />
        

      })}

    </div>
  )
}


