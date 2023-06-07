import React from 'react'
import Todo from './Todo'

function TodoList( {todos , setTodos } ) {
    
  return (
    <div>
        {
            todos.map((todo) => {
                console.log(todo)
                return (
                    <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo}/>
                )
            })
        }
    </div>
  )
}

export default TodoList
