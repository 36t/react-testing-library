// createAsyncThunk: 非同期系の関数を扱う際に利用
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { sleep } from 'utils/sleep'
import { fetchUser, UserType, ResponseType } from 'service/service'
import { RootState } from 'app/store'

// 2秒待って、引数の数字を返す
export const loadNumber = createAsyncThunk('fetch/dummy', async (num: number) => {
  await sleep(2000)
  return num as number
})

// APIにアクセスする非同期の関数
// Useranme: jsonplaceholderの命名に倣った
export const loadUsername = createAsyncThunk('fetch/api', async () => {
  const response: ResponseType = await fetchUser()
  const { username } = response.data as UserType
  return username

  // const response: UserType | string = await fetchUser()
  // console.log(response)
  // const { username } = response
  // return username as string
})

export interface CustomCounterState {
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

    // loadUsernameが正常終了した場合
    builder.addCase(loadUsername.fulfilled, (state, action: PayloadAction<string>) => {
      console.log('①')
      state.username = action.payload
    })

    // loadUsernameが失敗した場合
    builder.addCase(loadUsername.rejected, (state) => {
      console.log('②')
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
