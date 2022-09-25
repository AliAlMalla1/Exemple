import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between my-5'>

            <div className='text-blue-800 lg:text-3xl md:text-xl sm:text-lg  mx-6'>
                LOGO
            </div>

            <ul className="flex lg:text-2xl md:text-lg sm:text-base   mx-4">
                <li className="mr-6">
              <Link to='/'> <span className="text-blue-500 hover:text-blue-800" href="#">All Users</span></Link>
                </li>
                <li className="mr-6">
                   <Link to='/tableUsers'> <span className="text-blue-500 hover:text-blue-800" href="#">Table Users</span></Link>
                </li>
                <li className="mr-6">
                   <Link to='/tableSales'> <span className="text-blue-500 hover:text-blue-800" href="#">Table SalesMan</span></Link>
                </li>
                {/* <li className="mr-6">
                   <Link to='/create'> <span className="text-blue-500 hover:text-blue-800" href="#">Create User</span></Link>
                </li> */}
                <li className="mr-6">
                   <Link to='/product'> <span className="text-blue-500 hover:text-blue-800" href="#">Products</span></Link>
                </li>
                {/* <li className="mr-6">
                   <Link to='/createProduct'> <span className="text-blue-500 hover:text-blue-800" href="#">Create Product</span></Link>
                </li>
                 */}
                
            </ul>
        </div>
    )
}

export default Navbar
