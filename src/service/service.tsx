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

export const fetchUser = async (): Promise<UserType> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return response.data as UserType
  } catch (error) {
    return error
  }
}
