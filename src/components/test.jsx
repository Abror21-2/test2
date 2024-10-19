import React from 'react'
import { useCounter } from '../utils/useCounter'

const Test = () => {

    const { qiymat } = useCounter();

  return (
    <div>
        <h3>test</h3>
        <h3>{qiymat}</h3>
    </div>

  )
}

export default Test