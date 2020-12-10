import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MockServer from './MockServer'

// Mock Server関連
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Serverを設定
const server = setupServer(
  // 書き方について: https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
  // req: リクエスト。クエリーとか
  // res: レスポンス
  // ctx: コンテキスト
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    // レスポンスを作る
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }))
  })
)

// テストファイルの実行前に1度だけ実行
beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

// 最後に1度だけ呼ぶ
afterAll(() => server.close())

describe('Mocking API', () => {
  it('[Fetch success] Should display fetched data correctly and button disable', async () => {
    render(<MockServer />)

    // ボタンクリック
    userEvent.click(screen.getByRole('button'))

    // 新しいVersionだとエラーが出る
    // expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
    expect(await screen.findByText('Bred dummy')).toBeInTheDocument()

    // ボタン非アクティブ
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('[Fetch failure] Should display error msg, no render heading and button abled', async () => {
    // このitの中だけで有効
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
        // レスポンスを作る
        return res(ctx.status(404))
      })
    )

    render(<MockServer />)

    // ボタンクリック
    userEvent.click(screen.getByRole('button'))

    // エラーメッセージが表示されているか
    expect(await screen.findByTestId('error')).toHaveTextContent('ユーザー情報を取得できませんでした。')

    // ヘッダー要素が無い (エラーになるのでコメントアウトしておく)
    // expect(screen.findByRole('heading')).toBeNull()

    // ボタンアクティブ
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
