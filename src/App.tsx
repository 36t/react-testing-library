import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

import Render from './component/Render'
import RenderInput from './component/RenderInput'
import FrameworkList, { Framework } from './component/FrameworkList'

const App: React.FC = () => {
  // RenderInputコンポーネントにpropsで送る
  const output = (text: string) => {
    console.log(`output ${text}`)
  }

  // FrameworkListコンポーネントにデータを送る
  const frameworkList: Framework[] = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Angular',
    },
    {
      id: 3,
      item: 'Vue',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Render />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={frameworkList} />
      </header>
    </div>
  )
}

export default App
