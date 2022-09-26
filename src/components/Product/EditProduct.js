import axios from 'axios';
import React, {  useState } from 'react'
import { useDataContext } from '../../hooks/useDataContext';

const EditProduct = ({data}) => {

 const {dispatch} = useDataContext()
 const [showModal, setShowModal] = useState(false);

  const [title,setTitle] = useState();
  const [price,setPrice] = useState();
  const [url,setUrl] =  useState();
  const [category,setCategory] = useState();
  const [subCategory , setSubCategory] = useState()




const handleCLick = () => {
  setShowModal(true)
  setTitle(data.title)
  setPrice(data.price)
  setUrl(data.url)
  setCategory(data.category)
  setSubCategory(data.subCategory)
 
}

const handleSubmit = (e,id) => {
  e.preventDefault()
  

  const product = {title,price,url , category , subCategory}


  axios.patch(`http://localhost:7000/posts/${id}` , product )
  .then((res) => {
    setTitle('')
    setPrice('')
    setUrl('')
    setCategory('')
    setSubCategory('')
    setShowModal(false)
    dispatch({type: 'UPDATE_DATA' , payload: res.data}) 
    
  })

}

  return (
    <>

    <button
      className="inline-block px-6 py-2.5 mb-8 mr-3 bg-orange-500 border-2 border-orange-500 duration-500  text-white font-medium text-xs  uppercase rounded hover:bg-white hover:text-orange-500 "
      type="button"
      onClick={ handleCLick}
    >
    Edit Product
    </button>
    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
          
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
             
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Edit Product
                </h3>
                <button
                  className="p-1 ml-auto  border-0 text-blue-600 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className=" text-blue-600 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    x
                  </span>
                </button>
              </div>
              {/*body*/}
              <form>
              <div className="relative p-6 flex-auto">
               
               <div className='grid grid-cols-2 gap-5'>
                <div className="mb-4 ">
       <label className="block text-gray-700 text-base font-bold mb-2" for="title">
         Title
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="title" type="text" placeholder="Title" 
             name="title"
             value={title}
             onChange={(e) => setTitle(e.target.value)} 
          />
     </div>

     <div className="mb-4 ">
       <label className="block text-gray-700 text-base font-bold mb-2" for="price">
         Price
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="price" type="text" placeholder="Price" 
             name="price"
             value={price}
             onChange={(e) => setPrice(e.target.value)} 
          />
     </div>
     </div>

     <div className="mb-4 ">
       <label className="block text-gray-700 text-base font-bold mb-2" for="url">
         Url
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="url" type="text" placeholder="Url" 
             name="url"
             value={url}
             onChange={(e) => setUrl(e.target.value)} 
          />
     </div>

     <div className='grid grid-cols-2 gap-5'>
                <div className="mb-4 ">
       <label className="block text-gray-700 text-base font-bold mb-2" for="category">
         Category
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="category" type="text" placeholder="Category" 
             name="category"
             value={category}
             onChange={(e) => setCategory(e.target.value)} 
          />
     </div>

     <div className="mb-4 ">
       <label className="block text-gray-700 text-base font-bold mb-2" for="subCategory">
         Sub Category
       </label>
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="subCategory" type="text" placeholder="Sub Category" 
             name="subCategory"
             value={subCategory}
             onChange={(e) => setSubCategory(e.target.value)} 
          />
     </div>
     </div>
                

              </div>
             
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) =>handleSubmit(e,data.id)}
                >
                  edit
                </button>
              </div>
              </form>
              
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>

  )
}

export default EditProduct

