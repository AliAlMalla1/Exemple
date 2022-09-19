import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {

    const [users,setUsers] = useState()

    const fetchData = () => {
      axios.get('http://localhost:8000/users')
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      })
    }
  
    useEffect(() => {
      fetchData()
    },[])
  return (
    <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8  ">
    {users && users.map((user) => (
        
<div className='mx-6 my-5 duration-500 hover:scale-105 ' key={user.id} >
<div>
    <div className="bg-white shadow-2xl rounded-lg py-3 ">
        <div className=" p-2">
          {user.image && <img className="w-32 h-32 rounded-full mx-auto" src={user.image} alt={user.name} />}  
        </div>
        <div className="p-2">
            <h3 className="text-center text-2xl text-black font-bold ">{user.name}</h3>
            <table className="text-xs my-3">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-gray-700 text-sm font-bold">Phone</td>
                    <td className="px-2 py-2 font-bold">{user.phone}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-700 text-sm font-bold">Email</td>
                    <td className="px-2 py-2 font-bold">{user.email}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
            <Link to={`/${user.id}`}> <button className='inline-block bg-blue-600 border-2 border-blue-600 duration-500 text-center text-sm text-white px-4 py-2 uppercase rounded hover:bg-white hover:text-blue-600 font-semibold'>more detials</button></Link>
            </div>

        </div>
    </div>
</div>

</div>
    ))}
</div>
  )
}

export default User
