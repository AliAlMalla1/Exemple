import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../../hooks/useProductsContext';



const EditProduct = () => {
  const {dispatch} = useProductsContext()
  

  const [title,setTitle] = useState();
  const [price,setPrice] = useState();
  const [url,setUrl] =  useState();

  const {id} = useParams()

  const navigate = useNavigate()



const handleSubmit = (e) => {
  e.preventDefault()

  const product = {title,price,url}

  axios.patch(`http://localhost:7000/posts/${id}` , product )
  .then((res) => {
    setTitle('')
    setPrice('')
    setUrl('')
    console.log('product updated')
    dispatch({type: 'UPDATE_PRODUCT' , payload: res.data})
    navigate('/product')
  })
}

  return (
    <div className='flex justify-center my-20 '>
        thi id of product is {id}
   
    <div className="w-full absolute " >
    <h1 className='text-3xl  mx-7  '> Update Product</h1>
   <form   className="bg-white  rounded px-8 pt-6 pb-8 mb-4 " >
     
    
   <div className="mb-4">
       <label className="block text-gray-700 text-base font-bold mb-2" for="title">
         Title
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="title" type="text" placeholder="Title" 
             name="title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
            
          />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-base font-bold mb-2" for="price">
         Price
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="price" type="text" placeholder="Price" 
         name="price"
         value={price}
         onChange={(e) => setPrice(e.target.value)}
         
         />
     </div>

     <div className="mb-4">
       <label className="block text-gray-700 text-base font-bold mb-2" for="url">
         Url
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="url" type="text" placeholder="Url" 
         name="url"
         value={url}
         onChange={(e) => setUrl(e.target.value)}
        
       />
       
     </div>
  
 
     <div className="flex  justify-center">
       <button onClick={handleSubmit}  className="bg-blue-600   text-white font-bold py-2 px-4 mt-5 rounded border-2 border-blue-600 duration-500 hover:bg-white hover:text-blue-600" type="button">
        Update
       </button>
       
     </div>
   </form>
 
 </div>
 </div>
  )
}

export default EditProduct
