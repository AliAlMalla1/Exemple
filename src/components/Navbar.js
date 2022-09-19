import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between my-5'>

            <div className='text-blue-800 text-3xl mx-6'>
                LOGO
            </div>

            <ul className="flex text-xl mx-4">
                <li className="mr-6">
              <Link to='/'> <span className="text-blue-500 hover:text-blue-800" href="#">Home</span></Link>
                </li>
                <li className="mr-6">
                   <Link to='/create'> <span className="text-blue-500 hover:text-blue-800" href="#">Create</span></Link>
                </li>
                <li className="mr-6">
                    <span className="text-blue-500 hover:text-blue-800" href="#">Log out</span>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar
