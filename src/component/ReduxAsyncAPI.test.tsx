import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock Server関連
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// テスト用のRedux storeを作るため
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import customCounterReducer from 'features/customCounter/customCounterSlice'

import ReduxAsync from './ReduxAsync'

// Mock作成
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }))
  })
)
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cleanup()
})

describe('Redux Async API Mocking', () => {
  let store: Store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    })
  })

  it('[Fetch success] Should display username in h3 tag', async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    )
    // 非同期通信を始める前 (h1は存在しない)
    expect(screen.queryByRole('heading')).toBeNull()

    // ボタンをクリック
    userEvent.click(screen.getByText('LoadUsername'))

    expect(await screen.findByText('Bred dummy')).toBeInTheDocument()
  })
  it('[Fetch failed] Should display anonymous in h3 tag', async () => {
    // エラーレスポンスの作成
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
        return res(ctx.status(404))
      })
    )

    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    )
    // 非同期通信を始める前 (h1は存在しない)
    expect(screen.queryByRole('heading')).toBeNull()

    // ボタンをクリック
    userEvent.click(screen.getByText('LoadUsername'))

    expect(await screen.findByText('anonymous')).toBeInTheDocument()
  })
})
