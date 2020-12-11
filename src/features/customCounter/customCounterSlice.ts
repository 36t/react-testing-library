// createAsyncThunk: 非同期系の関数を扱う際に利用
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from '../../app/store'

// 指定した時間(m秒)だけ待機
const sleep = (msec: number) => {
  const d1: number = new Date().valueOf()
  // 開始時間と今の時間がmsecよりも小さかったらwhile繰り返す
  while (true) {
    const d2: number = new Date().valueOf()
    if (d2 - d1 > msec) {
      return
    }
  }
}

// 2秒待って、引数の数字を返す
export const loadNumber = createAsyncThunk('fetch/dummy', async (num: number) => {
  await sleep(2000)
  return num
})

// APIにアクセスする非同期の関数
export const fetchJSON = createAsyncThunk('fetch/api', async () => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users/1')
  const { username } = res.data
  return username
})

interface CustomCounterState {
  mode: number
  value: number
  username: string
}

const initialState: CustomCounterState = {
  mode: 0,
  value: 0,
  username: '',
}

export const customCounterSlice = createSlice({
  name: 'customCounter',
  initialState,
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1
          break
        case 1:
          state.value += 100
          break
        case 2:
          state.value += 10000
          break
        default:
          break
      }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload
          break
        case 1:
          state.value += 100 * action.payload
          break
        case 2:
          state.value += 10000 * action.payload
          break
        default:
          break
      }
    },
  },
  // 通信後の後処理
  extraReducers: (builder) => {
    // loadNumberが正常終了した場合
    builder.addCase(loadNumber.fulfilled, (state, action: PayloadAction<number>) => {
      state.value = 100 + action.payload
    })

    // loadNumberが失敗した場合
    builder.addCase(loadNumber.rejected, (state) => {
      state.value = 0
    })

    // fetchJSONが正常終了した場合
    builder.addCase(fetchJSON.fulfilled, (state, action: PayloadAction<string>) => {
      state.username = action.payload
    })

    // fetchJSONが失敗した場合
    builder.addCase(fetchJSON.rejected, (state) => {
      state.username = 'anonymous'
    })
  },
})

// ３つのreducerをエクスポート。コンポーネントで利用できるように
export const { increment, decrement, incrementByAmount } = customCounterSlice.actions

// useSelectorを使って、reactのコンポーネントからstateを直接参照できるように
export const selectCount = (state: RootState): number => state.customCounter.value
export const selectUsername = (state: RootState): string => state.customCounter.username

export default customCounterSlice.reducer
