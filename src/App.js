import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Create from './components/Create'
import EditUser from './components/EditUser'
import Navbar from './components/Navbar'
import User from './components/User'
import UserInfo from './components/UserInfo'

const App = () => {
 
  
  return (
   <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />}/>
        <Route path='/:id' element={<UserInfo />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </Router>
      
   </div>
  )
}

export default App

