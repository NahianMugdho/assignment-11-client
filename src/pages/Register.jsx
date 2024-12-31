import React, { useContext } from 'react';
import regxAnim from '../assets/Animation.json'
import Lottie from 'lottie-react';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const {createUser}=useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        const photoURL = formData.photoURL.value;
        createUser(email,password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="px-10 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
             <Lottie animationData={regxAnim}></Lottie>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Your password" 
                  className="input input-bordered" 
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input 
                  type="url" 
                  name="photoURL" 
                  placeholder="Photo URL" 
                  className="input input-bordered" 
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
};

export default Register;