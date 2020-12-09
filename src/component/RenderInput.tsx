import React, { useState } from 'react'

type Props = {
  outputConsole: (input: string) => void
}

// props経由でoutputConsoleという関数をもらう
const RenderInput: React.FC<Props> = ({ outputConsole }) => {
  const [input, setInput] = useState('')

  const outputValue = () => {
    if (input) {
      outputConsole(input)
    }
  }

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(`${event.target.value}`)
  }

  return (
    <div>
      <input type="text" placeholder="Enter" value={input} onChange={updateValue}></input>
      <button onClick={outputValue}>Console</button>
    </div>
  )
}

export default RenderInput
