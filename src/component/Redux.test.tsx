import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// テスト用のRedux storeを作るため
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import customCounterReducer from 'features/customCounter/customCounterSlice'

import Redux from './Redux'

afterEach(() => {
  cleanup()
})

describe('Redux Integration Test', () => {
  // テスト用のstoreの作成
  let store: Store
  beforeEach(() => {
    // app/store.tsから流用
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    })
  })

  it('Should display value with increment by 1 per click', () => {
    // index.tsの記述を参考
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    )

    // 3回クリック
    userEvent.click(screen.getByText('+'))
    userEvent.click(screen.getByText('+'))
    userEvent.click(screen.getByText('+'))

    // 3回クリックしたので3
    expect(screen.getByTestId('count-value')).toHaveTextContent('3')
  })

  it('Should display value with decrement by 1 per click', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    )

    // 2回クリック
    userEvent.click(screen.getByText('-'))
    userEvent.click(screen.getByText('-'))

    // 2回クリックしたので-2
    expect(screen.getByTestId('count-value')).toHaveTextContent('-2')
  })

  it('Should display value vwith incrementByAmount', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    )

    // inputのエレメントを取得
    const inputValue = screen.getByPlaceholderText('Enter')

    userEvent.type(inputValue, '2000')

    // 注意：以下だとエラー
    // userEvent.type(inputValue, 2000);

    // ボタンクリック
    userEvent.click(screen.getByText('IncrementByAmount'))

    // 2回クリックしたので-2
    expect(screen.getByTestId('count-value')).toHaveTextContent('2000')
  })
})
