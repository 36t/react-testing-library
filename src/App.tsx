import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

import Render from './component/Render'
import RenderInput from './component/RenderInput'

const App: React.FC = () => {
  // RenderInputにpropsで送る
  const output = (text: string) => {
    console.log(`output ${text}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Render />
        <RenderInput outputConsole={output} />
      </header>
    </div>
  )
}

export default App
