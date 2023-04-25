import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div className='grid gap-2 grid-cols-3 place-items-center' >

{
    users.map((user)=><UserCard user={user} key={user.id} />)
}
    </div>
  )
}

export default UserList   