import axios from 'axios';
import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Reducer, { INITIAL_STATE } from './hook/Reducer';

  

const CreateProduct = () => {

  const [title,setTitle] = useState();
  const [price,setPrice] = useState();
  const [url,setUrl] =  useState();

  const navigate = useNavigate()

  const [products , dispatch] = useReducer(Reducer , INITIAL_STATE)

const handleSubmit = (e) => {
  e.preventDefault()

  const product = {title,price,url}

  axios.post('http://localhost:7000/posts' , product )
  .then((res) => {
    setTitle('')
    setPrice('')
    setUrl('')
    console.log('product added')
    dispatch({type: 'ADD_PRODUCT' , payload: res.data})
    navigate('/product')
  })
}

  return (
    <div className='flex justify-center my-20 '>
   
    <div className="w-96 absolute right-20 " >
    <h1 className='text-3xl  mx-7  '> Create Product</h1>
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
        Create
       </button>
       
     </div>
   </form>
 
 </div>
 </div>
  )
}

export default CreateProduct
