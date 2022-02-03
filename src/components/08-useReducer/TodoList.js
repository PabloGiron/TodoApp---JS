import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleToggle, handleDelete}) => {


  return (
    <ul className='list-group list-group-flush'>
    {
        todos.map( (todo, i) => (
            // TodoListItem, recibe el todo de manera independiente y el index, y por último las funciones para cambiar el 
            // todo para que este siga funcionando (handleDelete, handleToogle) por referencia 
            <TodoListItem 
                key={todo.id}
                todo={todo} 
                idx={i} 
                handleDelete={ handleDelete } 
                handleToggle={ handleToggle } 
            />
        ))
    }
    </ul>
  );
};
