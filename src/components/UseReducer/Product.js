import React, { useEffect } from 'react'
import axios from 'axios'
import CreateProduct from './CreateProduct'
import { Link } from 'react-router-dom'
import {useProductsContext} from './../../hooks/useProductsContext'


const Product = () => {
  const {products , dispatch} = useProductsContext()

  const fetchData = () => {
    axios.get('http://localhost:7000/posts')
    .then(res => {
      console.log(res.data)
      dispatch({type: 'FETCH_PRODUCT' , payload : res.data})
      console.log(products)
    })
  }

  const handleCLick = (id) => {
    axios.delete(`http://localhost:7000/posts/${id}`)
    .then(() => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: { id }
    });
  })
}

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
     
    <table className="w-full text-sm text-left mx-24 my-20 shadow-xl ">
    <thead className="text-base text-white uppercase bg-blue-500 ">
        <tr>
        <th  className="py-3 px-6">
                #
            </th>
            <th  className="py-3 px-6">
                Profile
            </th>
            <th  className="py-3 px-6">
                Title
            </th>
            <th  className="py-3 px-6">
                Price
            </th>

            <th  className="py-3 px-6">
                ACTION
            </th>
        </tr>
    </thead>

  
        {products && products.map((product) => (
              <tbody key={product.id}>
              <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td  className="py-4 px-6 ">
                 {product.id}
              </td>
              <td className="py-4 px-6">
                <img src={product.url} alt={product.title}  className=' w-16 h-16 rounded-full'/>
              </td>
              <td className="py-4 px-6">
                {product.title}
              </td>
              <td className="py-4 px-6">
                {product.price}
              </td>
              <td className="py-4 px-6">
              <button onClick={() =>handleCLick(product.id)} className='bg-blue-600 text-white px-4 py-2 rounded-xl border-2 border-blue-600 duration-500 hover:bg-white hover:text-blue-600'> DELETE</button>
             <Link to={`/editProduct/${product.id}`} ><button className='bg-blue-600 text-white px-4 py-2 rounded-xl border-2 mx-4 border-blue-600 duration-500 hover:bg-white hover:text-blue-600'> EDIT</button></Link>
              </td>   
          </tr>
          </tbody>

        ))}
      
</table>

<CreateProduct />
</div>
  )
}

export default Product
