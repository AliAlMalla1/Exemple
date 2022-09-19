import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name,setName] = useState()
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [image, setImage] = useState('');
    const [phone,setPhone] = useState('')
    const [city,setCity] = useState()
    const [street,setStreet] = useState() 
    const [suite,setSuite] = useState()
    const [lat,setLat] = useState()
    const [lng,setLng] = useState()
    const navigate = useNavigate()

    const uploadImage = async (e)=> {
        const file=e.target.files[0]
      const base64 =  await converBase64(file)
      setImage(base64)
      
      };
    
      const converBase64 = (file) => {
        return new Promise((resolve, reject)=>{
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = (() =>{
            resolve(fileReader.result)
          });
    
          fileReader.onerror = ((error) =>{
            reject(error)
          })
        })
      }
    



    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name,username,email,password,image,phone,city,street,suite,lat,lng}
        axios.post('http://localhost:8000/users' , user)
        .then(() => {
            console.log('user added')
            navigate('/')

        })
    }


  return (
    <div className='flex justify-center my-10 '>
   <div className="w-full max-w-2xl" >
  <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-blue-600" >
        <h1 className='text-xl text-blue-500 font-bold  my-2'>Personal Info</h1>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  sm:grid-cols-1 gap-4 '>
  <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="name">
        Name
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </div>
    </div>

    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  sm:grid-cols-1 gap-4 '>
<div className="mb-6">
      <label className="block text-gray-700 text-base font-bold mb-2" for="email" >
        Email
      </label>
      <input className="shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 " id="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-base font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 " id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    </div>

    
<div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  sm:grid-cols-1 gap-4 '>
<div className="mb-6">
      <label className="block text-gray-700 text-base font-bold mb-2" for="photo" >
        Photo
      </label>
      <input className="shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 " id="photo" type="file" placeholder="Photo"  onChange={(e) => {
            uploadImage(e)
          }} />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-base font-bold mb-2" for="phone" >
        Phone Number
      </label>
      <input className="shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 " id="phone" type="number" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    </div>
    </div>


    <h1 className='text-xl text-blue-500 font-bold  my-2'>Location Info</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3  sm:grid-cols-1 gap-4 '>
  <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="city">
        City
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="city" type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="street">
        Street
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="street" type="text" placeholder="street" value={street} onChange={(e) => setStreet(e.target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="suite">
        Suite
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="suite" type="text" placeholder="Suite" value={suite} onChange={(e) => setSuite(e.target.value)} />
    </div>
    </div>

    <div className='grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  sm:grid-cols-1 gap-4 '>
  <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="lat">
        Lat
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="lat" type="number" placeholder="lat" value={lat} onChange={(e) => setLat(e.target.value)}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-base font-bold mb-2" for="lng">
        Lng
      </label>
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 " id="=lng" type="number" placeholder="Lng" value={lng} onChange={(e) => setLng(e.target.value)}/>
    </div>
    </div>
    



    <div className="flex  justify-center">
      <button onClick={handleSubmit} className="bg-blue-600   text-white font-bold py-2 px-4 mt-5 rounded border-2 border-blue-600 duration-500 hover:bg-white hover:text-blue-600" type="button">
       Create
      </button>
      
    </div>
  </form>

</div>
</div>
  )
}

export default Create
