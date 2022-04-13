import React from 'react'

const User = ({user}) => {
  return (
    <div>
     <div>
              <b>Name: {user.name}</b>
            </div>
    <p>{user.name}</p>
    <p>{user.email}</p>
    </div>
  )
}

export default User