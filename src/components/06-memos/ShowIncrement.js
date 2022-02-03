import React from 'react';

export const ShowIncrement = React.memo(( {increment} ) => {

    console.log('Me he vuelto a generar. sad');

  return (
    <button
        className='btn btn-primary'
        onClick={ () => {
            increment( 7 );
        }}
    >
        Incrementar exponencialmente
    </button>
  );
})
