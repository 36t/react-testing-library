import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, increment, decrement, incrementByAmount } from 'features/customCounter/customCounterSlice'

const Redux: React.FC = () => {
  const [number, setNumber] = useState(0)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const setInputValue = (value: string): void => {
    const num: number = +value
    setNumber(num)
  }

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>IncrementByAmount </button>
        <input type="text" placeholder="Enter" value={number} onChange={(event) => setInputValue(event.target.value)} />
      </div>
    </div>
  )
}

export default Redux
