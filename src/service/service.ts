import axios from 'axios'

type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
}

type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}

export type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company: CompanyType
}

export type ResponseType = {
  data: UserType
}

export const fetchUser = async (): Promise<ResponseType> => {
  /*
  try {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    const response = await axios.get('https://jsonplaceholder.typicode.com/error/501')
    return response.data as UserType
  } catch (error) {
    // return error.message
    throw new Error(error.message)
    // return Promise.reject(error): rejectされるだけで処理がここで止まる
    // throw new Error(error): コンパイルエラーでそもそも使えない
  }
  */

  return await axios.get('https://jsonplaceholder.typicode.com/users/1')

  // if (response.status !== 200) {
  //   throw new Error(`Error: status code ${response.status}, status text ${response.statusText}`)
  // }

  // return response.data as UserType
}
