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
     <li ><Link to='/'><a>Home</a></Link></li>
        <li >
        <Link to='queries'><a>All Queries</a> </Link>
          
         
        </li>

        <li>

{
  user? <button> <Link to='myqueries'> My Queries</Link></button> :<button className='hidden'>  <Link to='myqueries'> My Queries</Link></button>
}





</li>




        <li>

{
  user? <button> <Link to='myrec'> My Recommendations</Link></button> : <button className='hidden'> <Link to='myrec'> My Recommendations</Link></button>
}





</li>
      
        <li >

          {
            user? <button  onClick={handleLogOut} className="   "> Log Out</button> :<button className="  "> <Link to='login'>Log In</Link></button>
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
    <div className="btn btn-ghost text-xl flex items-center space-x-2">
  {/* Logo */}
  <img src="https://i.ibb.co/dgY6rcV/computer.png" alt="PRS Logo" className="w-8 h-8" />

  {/* Brand Name */}
  <p>PRS</p>
</div>

  </div>




  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-5">
   
   {/* <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>

  {
            user? <> </>: <Link to='register'><a className="btn">Register</a></Link>
          } */}
  {user ? (
    <div className="w-10 h-10 rounded-full overflow-hidden border">
      <img
        alt="User Profile"
        src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} // Show user's photo if available, otherwise default logo
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <Link to="register">
      <a className="btn">Register</a>
    </Link>
  )}

    {/* <Link to='register'><a className="btn">Register</a></Link> */}
  </div>
</div>
    );
};

export default Navbar;