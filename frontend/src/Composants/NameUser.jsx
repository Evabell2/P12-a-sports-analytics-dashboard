import service from "../service"
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

function NameUser({userID}) {
  const [user, setUser] = useState({})
  useEffect(() => {
    service.getUser(userID)
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
NameUser.propTypes = {
  userID: PropTypes.string.isRequired,
}
    
export default NameUser