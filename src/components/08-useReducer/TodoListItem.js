import React from 'react';

export const TodoListItem = ( {todo, idx, handleToggle, handleDelete} ) => {

  return (
    <li
    key = { todo.id }
    className='list-group-item'
    >
        <p 
            className={`text - center ${ todo.done && 'complete'}`}
            onClick={() => handleToggle(todo.id)}    
        >
            { idx + 1 }. {todo.desc}
        </p>
        <button
            className='btn btn-danger'
            onClick={ () => handleDelete(todo.id) }
        > 
            Borrar</button>
    </li>
  );
};
