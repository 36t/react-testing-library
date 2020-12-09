import React from 'react'

const Render: React.FC = () => {
  return (
    <div>
      <h1>Testing Library</h1>
      <input type="text" />
      <button>Click1</button>
      <button>Click2</button>
      <span>@React</span>
      <span data-testid="copyright">copyright</span>
    </div>
  )
}

export default Render
