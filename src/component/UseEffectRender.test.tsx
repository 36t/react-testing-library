import React from 'react'
import { render, screen } from '@testing-library/react'
import UseEffectRender from './UseEffectRender'

describe('useEffect rendering', () => {
  it('Should render only after async function resolved', async () => {
    render(<UseEffectRender />)

    // 最初の状態で「私は」は表示されていない
    expect(screen.queryByText(/私は/)).toBeNull()

    // データ取得後実行(通信がうまく行かない場合はErrorを表示)
    expect(await screen.findByText(/私は/)).toBeInTheDocument()
  })
})
