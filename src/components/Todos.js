import React from 'react'
import TodoItems from './TodoItems'
import './Todo.css'

const Todos = (props) => {
    return (
        <div className='container-Todo'>
            <h3 className='list-part'>Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display.." :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })
            }

        </div>
    )
}

export default Todos;
