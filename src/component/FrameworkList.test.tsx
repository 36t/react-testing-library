import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'

import FrameworkList from './FrameworkList'

afterEach(() => cleanup())

describe('Rendering the list with props', () => {
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList />)
    expect(screen.getByText('データがありません')).toBeInTheDocument()
  })

  it('Should render list item correctly', () => {
    // ダミーデータの準備
    const dummyFrameworkList = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Angular dummy' },
      { id: 3, item: 'Vue dummy' },
    ]

    render(<FrameworkList frameworks={dummyFrameworkList} />)

    // 描画後の内容を取得
    // (ele) => ele.textContent: 配列からテキストデータだけ抜き取る
    const frameworkItems = screen.getAllByRole('listitem').map((ele) => ele.textContent)

    // ダミーデータからitemのみを抜き取る
    const dummyItems = dummyFrameworkList.map((ele) => ele.item)

    // 上記2点が等しいか
    expect(frameworkItems).toEqual(dummyItems)

    // 指定した文字列が存在しない
    expect(screen.queryByText('データがありません')).toBeNull()

    // 以下はエラーになる (queryByTextの必要あり)
    // expect(screen.getByText('データがありません')).not.toBeInTheDocument()
    // 参考：https://github.com/testing-library/jest-dom/issues/202
    // 参考：https://testing-library.com/docs/guide-disappearance/
    expect(screen.queryByText('データがありません')).not.toBeInTheDocument()
  })
})
