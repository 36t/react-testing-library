import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RenderInput from './RenderInput'

// afterEach: 各it(テストケース)の後に実行
// cleanup: 設定をリセット
afterEach(() => cleanup())

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    // Mock関数
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)

    expect(screen.getByRole('button')).toBeTruthy()

    // getByPlaceholderText: placeholderの取得
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
  })
})

describe('Input form onChange event', () => {
  it('Should update input value correctly', () => {
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)

    // input要素の取得
    const inputElement = screen.getByPlaceholderText('Enter')

    // userEvent: inputの値を「test」にタイピング変更
    userEvent.type(inputElement, 'test')

    // input要素の値が「test」になっている
    expect((inputElement as HTMLInputElement).value).toBe('test')
  })
})

describe('Console button conditionally triggered', () => {
  it('Should not trigger output function', () => {
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)

    // ボタンをクリック
    userEvent.click(screen.getByRole('button'))

    // not.toHaveBeenCalled: 関数が呼ばれない
    expect(outputConsole).not.toHaveBeenCalled()
  })
  it('Should trigger output function', () => {
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)

    // ボタン要素の取得と値の変更
    const inputElement = screen.getByPlaceholderText('Enter')
    userEvent.type(inputElement, 'test')

    // ボタンをクリック
    userEvent.click(screen.getByRole('button'))

    // toHaveBeenCalledTimes: 引数分関数が呼ばれる
    expect(outputConsole).toHaveBeenCalledTimes(1)
  })
})
