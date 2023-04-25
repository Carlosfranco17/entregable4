import React from 'react'
import UserCard from './UserCard'

const UserList = ({users,deleteUser,handleClickEdit}) => {
  return (
    <div className='grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center' >

{
    users.map((user)=><UserCard handleClickEdit={handleClickEdit} deleteUser={deleteUser} user={user} key={user.id} />)
}
    </div>
  )
}

export default UserList   