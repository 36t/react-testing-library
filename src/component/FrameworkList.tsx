import React from 'react'

export type Framework = {
  id: number
  item: string
}

type Props = {
  frameworks?: Framework[]
}

const FrameworkList: React.FC<Props> = (list: Props) => {
  if (!list.frameworks || !list.frameworks.length) {
    return <h1>データがありません</h1>
  }

  return (
    <div>
      <ul>
        {list.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FrameworkList
