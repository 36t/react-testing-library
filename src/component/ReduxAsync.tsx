import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, loadNumber } from 'features/customCounter/customCounterSlice'

const ReduxAsync: React.FC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(loadNumber(5))}>LoadNumber</button>
    </div>
  )
}

export default ReduxAsync
