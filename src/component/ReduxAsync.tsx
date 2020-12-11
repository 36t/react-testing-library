import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, selectUsername, loadNumber, loadUsername } from 'features/customCounter/customCounterSlice'

const ReduxAsync: React.FC = () => {
  const count = useSelector(selectCount)
  const username = useSelector(selectUsername)

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p data-testid="count-value">{count}</p>
        <button onClick={() => dispatch(loadNumber(5))}>LoadNumber</button>
      </div>
      <div>
        {username && <h1>{username}</h1>}
        <button onClick={() => dispatch(loadUsername())}>LoadUsername</button>
      </div>
    </div>
  )
}

export default ReduxAsync
