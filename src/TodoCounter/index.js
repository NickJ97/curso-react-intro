import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter (){
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return(
    <h1 className = 'TodoCounter'>
      Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  )
}

export { TodoCounter };