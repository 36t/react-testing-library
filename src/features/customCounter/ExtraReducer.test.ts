import reducer, { CustomCounterState, loadNumber } from './customCounterSlice'

describe('extraReducers', () => {
  const initialState: CustomCounterState = {
    mode: 0,
    value: 0,
    username: '',
  }
  it('Should output 100 + payload when fulfilled', () => {
    // actionの生成
    // { type: 'fetch/dummy/fulfilled', payload: 5 }
    const action = { type: loadNumber.fulfilled.type, payload: 5 }

    const state = reducer(initialState, action)

    expect(state.value).toEqual(105)
  })
  it('Should output 100 - payload when rejected', () => {
    const action = { type: loadNumber.rejected.type, payload: 5 }
    const state = reducer(initialState, action)
    expect(state.value).toEqual(0)
  })
})
