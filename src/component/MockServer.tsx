import React, { useState } from 'react'
import { fetchUser, UserType } from 'service/service'

const UseEffectRender: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const loadUser = async () => {
    await fetchUser()
      .then((response) => {
        const { username } = response.data as UserType
        setUsername(username)
        setClicked(true)
      })
      .catch((error) => {
        console.log(error)
        setError('ユーザー情報を取得できませんでした。')
      })
  }

  const buttonText = clicked ? 'ローディング終了' : '読み込み開始'

  return (
    <div>
      <button onClick={loadUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  )
}

export default UseEffectRender
