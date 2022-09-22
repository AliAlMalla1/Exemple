import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {

    const [users,setUsers] = useState();
    const [query, setQuery] = useState("");

    const fetchData = () => {
      axios.get('http://localhost:8000/users')
      .then(res => {
        
        setUsers(res.data)
      })
    }
  
    useEffect(() => {
      fetchData()
    },[])
  return (
    <>
    <form className="flex items-center mt-20 mb-10">   
    <label className="sr-only">Search</label>
    <div className="relative  xs:w-full  sm:w-full  md:w-full  lg:w-full  xl:w-full mx-40 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3  ">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text"  onChange={(e) => setQuery(e.target.value) } className="bg-white border-2 border-blue-600 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  " placeholder="Search By Name ..." required />
    </div>
</form>
   
    <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8  ">
    {users && users.filter((user) => user.name.toLowerCase().includes(query)
        ).map((user) => (
        
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
</>
  )
}

export default User
