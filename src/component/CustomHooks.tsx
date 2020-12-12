import React from 'react'
import { useCounter } from 'hooks/useCounter'

const CustomHooks: React.FC = () => {
  // カスタムHooks
  const { count, increment, decrement, double, triple, reset } = useCounter(3)

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={triple}>Triple</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHooks
