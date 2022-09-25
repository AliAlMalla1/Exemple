import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import TableUsers from './components/User/TableUsers'
import Product from './components/Product/Product'
import EditProduct from './components/Product/EditProduct'
import AllUser from './components/User/AllUser'
import TableSalesMan from './components/User/TableSalesMan'

// npx json-server --watch data/db.json --port 8000
// npx json-server --watch data/db2.json --port 7000



const App = () => {
 
  
  return (
   <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<AllUser />} />
        <Route path='/tableUsers' element={<TableUsers />} />
        <Route path='/tableSales' element={<TableSalesMan />} />
        <Route path='/product' element={<Product />} />
        <Route path='/editProduct/:id' element={<EditProduct />} />
      
       
      </Routes>
    </Router>
      
   </div>
  )
}

export default App

