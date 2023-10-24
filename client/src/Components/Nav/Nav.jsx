import React from 'react';
import { Link } from 'react-router-dom'
import {useAuth} from "../../context/AuthContext"
const Nav = () => {
  const {isAuthenticated,user,logout}=useAuth()
  return (
    <nav className="bg-teal-500 p-4">
      <ul className="flex justify-end">
        
        <li className='mr-6'>
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
        </li>
        {
          isAuthenticated ?<>
          <li className="mr-6">
          <Link to="/profile" className="text-white hover:text-blue-200">{user.username}</Link>
        </li>
        <li className="mr-6">
          <p onClick={logout} className="text-white hover:text-blue-200 cursor-pointer">logout</p>
        </li>
          </> :<>   <li className="mr-6">
          <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
        </li>
        <li className="mr-6">
          <Link to="/register" className="text-white hover:text-blue-200">Register</Link>
        </li>
          </>
        }
     
      </ul>
    </nav>
  );
};

export default Nav;
