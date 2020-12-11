import reducer, { CustomCounterState, increment, decrement, incrementByAmount } from './customCounterSlice'

describe('Reducer of ReduxToolKit', () => {
  describe('increment action', () => {
    // ダミーデータを設定
    // TODO: usernameが不要
    let initialState: CustomCounterState = {
      mode: 0,
      value: 1,
      username: '',
    }
    it('Should increment by 1 with mode 0', () => {
      // actionの作成
      // action = { type: 'customCounter/increment' }
      const action = { type: increment.type }

      // incrementを実行
      const state = reducer(initialState, action)

      expect(state.value).toEqual(2)
    })

    it('Should increment by 100 with mode 1', () => {
      initialState = {
        mode: 1,
        value: 1,
        username: '',
      }
      const action = { type: increment.type }
      const state = reducer(initialState, action)
      expect(state.value).toEqual(101)
    })

    it('Should increment by 10000 with mode 2', () => {
      initialState = {
        mode: 2,
        value: 1,
        username: '',
      }
      const action = { type: increment.type }
      const state = reducer(initialState, action)
      expect(state.value).toEqual(10001)
    })
  })

  describe('decrement action', () => {
    const initialState: CustomCounterState = {
      mode: 0,
      value: 1,
      username: '',
    }
    it('Should increment by 0 with mode 0', () => {
      // actionの作成
      // action = { type: 'customCounter/decrement' }
      const action = { type: decrement.type }

      const state = reducer(initialState, action)

      expect(state.value).toEqual(0)
    })
  })

  describe('incrementByAmount action', () => {
    // ダミーデータを設定
    let initialState: CustomCounterState = {
      mode: 0,
      value: 1,
      username: '',
    }
    it('Should increment by payload value with mode 0', () => {
      // { type: 'customCounter/incrementByAmount', payload: 3 }
      const action = { type: incrementByAmount.type, payload: 3 }

      const state = reducer(initialState, action)

      expect(state.value).toEqual(4)
    })

    it('Should increment by 100 * payload value with mode 1', () => {
      initialState = {
        mode: 1,
        value: 1,
        username: '',
      }
      const action = { type: incrementByAmount.type, payload: 3 }
      const state = reducer(initialState, action)
      expect(state.value).toEqual(301)
    })
    it('Should increment by 10000 * payload value with mode 2', () => {
      initialState = {
        mode: 2,
        value: 1,
        username: '',
      }
      const action = { type: incrementByAmount.type, payload: 3 }
      const state = reducer(initialState, action)
      expect(state.value).toEqual(30001)
    })
  })
})
