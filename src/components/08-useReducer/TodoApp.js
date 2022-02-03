import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [ ], init);

    const [{description}, handleInputChange, reset ]= useForm({
        description : ''
    });

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();

        // console.log('Nueva tarea');
    }

  return (
    <div>
        <h1>ToDo App ( {todos.length} ) </h1>
        <hr/>

         <div className='row'>
             <div className='col-7'>
                 {/* TodoList, (recibe: los todos, ) */}
                 < TodoList 
                    todos={ todos } 
                    handleDelete={ handleDelete } 
                    handleToggle={ handleToggle } 
                 />
             </div>
             <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr/>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        name="description"
                        className='form-control'
                        placeholder="Aprendiendo..."
                        autoComplete='off'
                        value={ description }
                        onChange={ handleInputChange }
                    >

                    </input>
                    <button
                        className='btn btn-outline-primary mt-1 btn-block'
                        type='submit'
                    >
                        Agregar
                    </button>
                </form>
             </div>
         </div>

    </div>
  );
};
