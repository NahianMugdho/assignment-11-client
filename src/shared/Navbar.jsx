import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from './../context/AuthProvider';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)


  const handleLogOut = ()=>
  {
    logOut()
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    }).catch((error) => {
      // An error happened.
      console.log('An error happened');
    });

  }




    const links = <>
     <li><Link to='/'><a>Home</a></Link></li>
        <li>
          <a>Queries</a>
         
        </li>
      
        <li>

          {
            user? <button onClick={handleLogOut}> Log OUT</button> : <Link to='login'><a>Log In</a></Link>
          }





        </li>
    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">

  {
            user? <> </>: <Link to='register'><a className="btn">Register</a></Link>
          }


    {/* <Link to='register'><a className="btn">Register</a></Link> */}
  </div>
</div>
    );
};

export default Navbar;