import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Create from './components/UseState/Create'
import EditUser from './components/UseState/EditUser'
import Navbar from './components/Navbar'
import TableUsers from './components/UseState/TableUsers'
import User from './components/UseState/User'
import UserInfo from './components/UseState/UserInfo'
import Product from './components/UseReducer/Product'
import EditProduct from './components/UseReducer/EditProduct'

// npx json-server --watch data/db.json --port 8000
// npx json-server --watch data/db2.json --port 7000



const App = () => {
 
  
  return (
   <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />}/>
        <Route path='/tableUsers' element={<TableUsers />} />
        <Route path='/:id' element={<UserInfo />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/product' element={<Product />} />
        <Route path='/editProduct/:id' element={<EditProduct />} />
      
       
      </Routes>
    </Router>
      
   </div>
  )
}

export default App

