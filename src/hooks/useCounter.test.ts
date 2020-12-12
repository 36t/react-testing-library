import { act, renderHook } from '@testing-library/react-hooks'
import { cleanup } from '@testing-library/react'

import { useCounter } from './useCounter'

afterEach(() => cleanup())

describe('useCounter custom Hook', () => {
  it('should increment by 1', () => {
    // renderHook は返り値がresultと決まっている
    const { result } = renderHook(() => useCounter(3))

    // { current: [Getter], error: [Getter] }
    // console.log(result)

    // 初期値のテスト
    expect(result.current.count).toBe(3)

    // React Hooksのライブラリを使った場合はactで囲む必要がる
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(4)
  })

  it('should decrement by 1', () => {
    // renderHook は返り値がresultと決まっている
    const { result } = renderHook(() => useCounter(3))

    // 初期値のテスト
    expect(result.current.count).toBe(3)

    // React Hooksのライブラリを使った場合はactで囲む必要がる
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(2)
  })

  it('should double by 1', () => {
    // renderHook は返り値がresultと決まっている
    const { result } = renderHook(() => useCounter(3))

    // 初期値のテスト
    expect(result.current.count).toBe(3)

    // React Hooksのライブラリを使った場合はactで囲む必要がる
    act(() => {
      result.current.double()
    })
    expect(result.current.count).toBe(6)
  })

  it('should triple by 1', () => {
    // renderHook は返り値がresultと決まっている
    const { result } = renderHook(() => useCounter(3))

    // 初期値のテスト
    expect(result.current.count).toBe(3)

    // React Hooksのライブラリを使った場合はactで囲む必要がる
    act(() => {
      result.current.triple()
    })
    expect(result.current.count).toBe(9)
  })

  it('should reset by 1', () => {
    // renderHook は返り値がresultと決まっている
    const { result } = renderHook(() => useCounter(3))

    // 初期値のテスト
    expect(result.current.count).toBe(3)

    // React Hooksのライブラリを使った場合はactで囲む必要がる
    act(() => {
      result.current.reset()
    })
    expect(result.current.count).toBe(0)
  })
})
