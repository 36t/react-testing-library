import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// テスト用のRedux storeを作るため
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import customCounterReducer from 'features/customCounter/customCounterSlice'

import ReduxAsync from './ReduxAsync'

afterEach(() => {
  cleanup()
})

describe('ReduxAsync test', () => {
  // テスト用のstoreの作成
  let store: Store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    })
  })
  it('Should display value with 100 + payload', async () => {
    // index.tsを参考
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    )

    // ボタンをクリック
    userEvent.click(screen.getByText('LoadNumber'))

    expect(await screen.findByTestId('count-value')).toHaveTextContent('105')
  })
})
