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
  // fetchUserの使用箇所でロジックが異なるため、通信後の処理は使用コンポーネントで調整するようにしている
  return await axios.get('https://jsonplaceholder.typicode.com/users/1')
}
