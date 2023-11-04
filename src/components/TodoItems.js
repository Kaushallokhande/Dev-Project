import React from 'react'
import './Todo.css'

const TodoItems = ({todo , onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="deleteBtn" onClick={()=>{
        onDelete(todo)
        }} >Delete</button>
    </div>
  )
}

export default TodoItems;
