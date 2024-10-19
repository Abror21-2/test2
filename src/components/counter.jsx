import React, { useState } from 'react'
import { useCounter } from '../utils/useCounter';

const Counter = () => {

    const {qiymat, qiymatOzgartirish} = useCounter();

    const increment = () => {
        qiymatOzgartirish(prev => prev + 1);
    }

    const decrement = () => {
        qiymatOzgartirish(prev => prev - 1);
    }

  return (
    <div>
        <h2>counter</h2>
        <h1>{qiymat}</h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter