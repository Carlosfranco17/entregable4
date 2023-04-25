import React from 'react'

const UserCard = ({user,deleteUser}) => {
  return (
    <article className=' mt-8 bg-white '>
      
<div>
    <img className='mx-auto w-[220px]' src={user.image_url} alt="" />
</div>
<h3 className='p-3 font-semibold  align-enter;'>{user.first_name} {user.last_name}</h3>
<ul className='mx-2'>
    <li>
        <h4>Correo</h4>
        <span>{user.email}</span>
    </li>
    <li>
        <h4>Cumpleaños</h4>
        <span><i class='bx bx-gift'></i>{user.birthday}</span>
    </li>
    
</ul>
<div className='flex justify-end'>
    <button onClick={()=>deleteUser(user.id)} className='mx-2 bg-red-500 px-1 mb-2 w-8'>
<i className=' text-white bx bxs-trash'></i>
    </button>
    <button  className='px-1 border-[2px] border-gray-400 mb-2 mr-2'>
    <i className='  text-gray-400 bx bxs-pencil'></i>
    </button>
</div>

    </article>
  )
}

export default UserCard