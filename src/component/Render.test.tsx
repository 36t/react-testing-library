import React from 'react'
import { render, screen } from '@testing-library/react'

import Render from './Render'

// describe: タイトル
describe('Rendering', () => {
  // it: テスト
  it('Should render all the elements correctly', () => {
    // render: 描画
    render(<Render />)

    // screen: 要素にアクセスする
    // screen.debug(): renderで設定したコンポーネントの内容を出力
    screen.debug()

    // getByRole: 要素
    // toBeTruthy: 有る
    expect(screen.getByRole('heading')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()

    // getAllByRole: 複数要素
    expect(screen.getAllByRole('button')[0]).toBeTruthy()
    expect(screen.getAllByRole('button')[1]).toBeTruthy()

    // 該当した文字をエレメント込で出力 (<span>@React</span>)
    screen.debug(screen.getByText('@React'))
    // getByText: テキスト
    expect(screen.getByText('@React')).toBeTruthy()

    // toBeNull: 無い
    expect(screen.queryByText('Vue')).toBeNull()

    // getByTestId: 「data-testid="copyright"」を使用
    expect(screen.getByTestId('copyright')).toBeTruthy()
  })
})
