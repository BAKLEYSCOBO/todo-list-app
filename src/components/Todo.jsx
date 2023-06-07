import React from 'react'

function Todo( {todo , todos , setTodos } ) {

    const deleteHandler = () => {
        setTodos(todos.filter( el => el.id !== todo.id) )
    }
  return (
    <div className='todo-container'>
        <ul>
             <li> <span> {todo.text} </span> </li>
        </ul>
        <button onClick={deleteHandler}> Delete </button>
    </div>
  )
}

export default Todo
