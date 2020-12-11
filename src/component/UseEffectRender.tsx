import React, { useEffect, useState } from 'react'
import { fetchUser, UserType } from 'service/userService'

const UseEffectRender: React.FC = () => {
  const [user, setUser] = useState({} as UserType)

  useEffect(() => {
    const loadUser = async () => {
      await fetchUser().then((response) => {
        const user = response.data as UserType
        setUser(user)
      })
    }

    loadUser()
  }, [])

  return (
    <div>
      {user.username && user.email ? (
        <p>
          私は{user.username}です。メールアドレスは{user.email}です。
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default UseEffectRender
