import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDataContext } from '../../hooks/useDataContext';

const TableSalesMan = () => {
    const {data , dispatch} = useDataContext()
    const [query, setQuery] = useState("");
    let index = 0

    const fetchData = () => {
      axios.get('http://localhost:8000/users')
      .then(res => {
        dispatch({type: 'FETCH_DATA' , payload : res.data})
  
      
      })
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`)
        .then(() => {
          dispatch({
            type: "DELETE_DATA",
            payload: { id }
          });
        })
      }
    
    useEffect(() => {
      fetchData()
    },[])
    return (
      <div >
          <h1 className='text-4xl  text-blue-600 mt-20 text-center'> Uers</h1>
          <form className="flex items-center mt-8 mb-8 ">
              <label className="sr-only">Search</label>
              <div className="relative  xs:w-full  sm:w-full  md:w-full  lg:w-full  xl:w-full mx-40 ">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3  ">
                      <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" onChange={(e) => setQuery(e.target.value)} className="bg-white border-2 border-blue-600 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  " placeholder="Search By Name ..." required />
              </div>
          </form>
          <table className="max-w-full text-sm text-left mx-16 my-2 shadow-xl">
              <thead className="text-base text-white uppercase bg-blue-500 ">
                  <tr>
                      <th className="py-3 px-6">
                          #
                      </th>
                      <th className="py-3 px-6">
                          Profile
                      </th>
                      <th className="py-3 px-6">
                          Name
                      </th>
                      <th className="py-3 px-6">
                          Username
                      </th>
                      <th className="py-3 px-6">
                          Email
                      </th>
                      <th className="py-3 px-6">
                          Phone
                      </th>
                      <th className="py-3 px-6">
                          City
                      </th>
                      <th className="py-3 px-6">
                          Street
                      </th>
                      <th className="py-3 px-6">
                          Suite
                      </th>
                    
                      <th className="py-3 px-6">
                          Action
                      </th>
                  </tr>
              </thead>


              {data && data.filter((user) => user?.name?.toLowerCase().includes(query)).map((user) => (
                  <tbody key={user.id}>
                      {user.contract && <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="py-4 px-6 ">
                             {index = index +1}
                          </td>
                          <td className="py-4 px-6">
                              <img src={user.image} alt={user.name} className=' w-16 h-16 rounded-full' />
                          </td>
                          <td className="py-4 px-6">
                              {user.name}
                          </td>
                          <td className="py-4 px-6">
                              {user.username}
                          </td>
                          <td className="py-4 px-6">
                              {user.email}
                          </td>
                          <td className="py-4 px-6">
                              {user.phone}
                          </td>
                          <td className="py-4 px-6">
                              {user.city}
                          </td>
                          <td className="py-4 px-6">
                              {user.street}
                          </td>
                          <td className="py-4 px-6">
                              {user.suite}
                          </td>
                     
                          <td className='flex px-4 py-6'>
                             
                              <button type="button" onClick={() => handleDelete(user.id)} className=" inline-block px-6 py-2.5  bg-red-800 border-2 border-red-800 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-red-800">Delete</button>
                          </td>

                      </tr>}
                  </tbody>

              ))}


          </table>
      </div>
  )
     
   


}

export default TableSalesMan
