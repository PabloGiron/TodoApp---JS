import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';



export const CounterWithCustomHook = () => {

    const { state: counter , increment, decrement, reset} = useCounter(564542126156);
    
    return (
    <>
        <h1> Counter with hook: {counter}</h1>
        <hr/>
        <button className='btn' onClick={() => increment(3)}>+1</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={() => decrement(3)}>-1</button>
    </>
  );
};

