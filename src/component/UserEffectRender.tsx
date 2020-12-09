import React, { useEffect, useState } from 'react'
import { fetchUser, UserType } from '../service/service'

const UserEffectRender: React.FC = () => {
  const [user, setUser] = useState({} as UserType)

  useEffect(() => {
    const fetchUserData = async () => {
      const user: UserType = await fetchUser()
      setUser(user)
    }

    fetchUserData()
  }, [])

  return (
    <div>
      {user ? (
        <p>
          私は{user.username}です。メールアドレスは{user.email}です。
        </p>
      ) : null}
    </div>
  )
}

export default UserEffectRender
