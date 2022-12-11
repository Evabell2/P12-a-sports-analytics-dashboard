import service from "../service"
import { useState } from 'react'
import { useEffect } from 'react'

function NameUser() {
  const [user, setUser] = useState({})
  useEffect(() => {
    service.getUser(18)
    .then(data => {
      setUser(data)
    })
  })
    return (
      <div id='user_message'>
          <h1>Bonjour<span>{user.data && user.data.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    )
}
    
export default NameUser