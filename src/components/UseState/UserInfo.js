import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UserInfo = () => {
    const { id }  = useParams()
    const [userInfo , setUserInfo] = useState('');
    const navigate = useNavigate()

    const fetchEachData = () => {
        axios.get(`http://localhost:8000/users/${id}`)
        .then(res => {
            setUserInfo(res.data)
        })

    }

    const handleDelete = () => {
      axios.delete(`http://localhost:8000/users/${id}`)
      .then(() => {
        navigate('/')
      })
    }
    useEffect(() => {
        fetchEachData()
    },[])
  return (
  

    <div className="flex justify-center ">
  <div className="rounded-lg shadow-lg bg-white max-w-sm my-10  ">
    <a href="#!">
      <img className="rounded-t-lg w-96 max-h-60" src={userInfo.image} alt={userInfo.name}/>
    </a>
    <div className='grid grid-cols-2'>
    <div className="p-6">
      <h3 className='font-bold text-lg py-2'>Personal Info</h3>
      <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>Name: </span>{userInfo.name}</h5>
      <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>username: </span>{userInfo.username}</h5>
      <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>Email: </span>{userInfo.email}</h5>
      <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>Phone: </span>{userInfo.phone}</h5>
     
      </div>
      <div className='p-6'>
        <h3 className='font-bold text-lg py-2'>Location Info</h3>
        <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>City: </span>{userInfo.city}</h5>
        <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>Street: </span>{userInfo.street}</h5>
        <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>suite: </span>{userInfo.suite}</h5>
        <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>Lat: </span>{userInfo.lat}</h5>
        <h5 className="text-gray-900 text-sm font-medium mb-2"><span className='text-blue-900'>lng: </span>{userInfo.lng}</h5>
      </div>
      </div>
      <div className='float-right mx-4 '>
      <Link to={`/edit/${userInfo.id}`} ><button type="button" className=" mx-2 inline-block px-6 py-2.5 mb-8 bg-orange-500 border-2 border-orange-500 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-orange-500">Edit</button></Link>
      <button type="button" onClick={() => handleDelete()} className=" inline-block px-6 py-2.5 mb-8 bg-red-800 border-2 border-red-800 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-red-800">Delete</button>

      </div>
  </div>
</div>
  )
}

export default UserInfo
