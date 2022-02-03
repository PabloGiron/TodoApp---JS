
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(5);
    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data&& data[0];

    console.log(author, quote);

  return (
    <div>
        <h1>BreakingBad quotes</h1>
        <hr/>
    
        {
            loading
            ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
            :
                (
                    <blockquote className="blockquote text-right">
                        <p className='mb-2'>{ quote }</p>
                        <footer className='blockquote-footer'> { author } </footer>
                    </blockquote>
                )

        }

        <button 
            onClick={increment} 
            className='btn btn-primary'
        > 
            Next quote
        </button>

    </div>
  );
};
