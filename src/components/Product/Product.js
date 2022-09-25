import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateProduct from './CreateProduct'
import { Link } from 'react-router-dom'
import { useDataContext } from '../../hooks/useDataContext'



const Product = () => {
  const { data, dispatch } = useDataContext()
  const [query, setQuery] = useState("");

  let index = 0





  const fetchData = () => {
    axios.get(`http://localhost:7000/posts?q=${query}`)
      .then(res => {
        dispatch({ type: 'FETCH_DATA', payload: res.data })


      })
  }

  const handleCLick = (id) => {
    axios.delete(`http://localhost:7000/posts/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_DATA",
          payload: { id }
        });
      })
  }





  useEffect(() => {
    fetchData()
  }, [query])
  return (
    <>

<form className="flex items-center mt-8 mb-8 ">
                <label className="sr-only">Search</label>
                <div className="relative  xs:w-full  sm:w-full  md:w-full  lg:w-full  xl:w-full mx-40 ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3  ">
                        <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" onChange={(e) => setQuery(e.target.value)} className="bg-white border-2 border-blue-600 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  " placeholder="Search By Name ..." required />
                </div>
            </form>
            <div className='float-right mr-16'>
            <div><CreateProduct /></div>
            </div>
      <div>

  
        <table className="w-11/12 text-sm text-left mx-16 shadow-xl ">
          <thead className="text-base text-white uppercase bg-blue-500 ">
            <tr>
              <th className="py-3 px-6">
                #
              </th>
              <th className="py-3 px-6">
                Profile
              </th>
              <th className="py-3 px-6">
                Title
              </th>
              <th className="py-3 px-6">
                Price
              </th>

              <th className="py-3 px-6">
                Category
              </th>

              <th className="py-3 px-6">
                SubCategory
              </th>

              <th className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>


          {data && data.filter((product) => product?.title?.toLowerCase()?.includes(query))?.map((product) => (
            <tbody key={product.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 ">
                  {index = index + 1}
                </td>
                <td className="py-4 px-6">
                  <img src={product.url} alt={product.title} className=' w-16 h-16 rounded-full' />
                </td>
                <td className="py-4 px-6">
                  {product.title}
                </td>
                <td className="py-4 px-6">
                  {product.price}
                </td>
                <td className="py-4 px-6">
                  {product.category}
                </td>
                <td className="py-4 px-6">
                  {product.subCategory}
                </td>

                <td className='flex px-4 py-6'>
                  <Link to={`/editProduct/${product.id}`} ><button type="button" className=" mx-2 inline-block px-6 py-2.5 mb-8 bg-orange-500 border-2 border-orange-500 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-orange-500">Edit</button></Link>
                  <button type="button" onClick={() => handleCLick(product.id)} className=" inline-block px-6 py-2.5 mb-8 bg-red-800 border-2 border-red-800 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-red-800">Delete</button>
                </td>

              </tr>
            </tbody>

          ))}

        </table>
       
        
      </div>
    </>
  )
}

export default Product
