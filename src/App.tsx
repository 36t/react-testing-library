import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

import Render from './component/Render'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Render />
      </header>
    </div>
  )
}

export default App
