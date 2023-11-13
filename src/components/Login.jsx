import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../styles/Login.css'
import Navbar from '../components/Navbar'

function  Login() {
  // const [user,setuser] = useState(false)
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setuser(true);
  //   }
  // }, []);
    const [credentials,setcredentials]=useState({email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
    e.preventDefault();
   const response =await  fetch("http://localhost:8001/api/auth/login",{
method:'POST',
headers:{
    'Content-Type':'application/json',
     },
     body:JSON.stringify({email:credentials.email,password:credentials.password})
   });
   const json=await response.json()
   console.log(json);
   if(json.success){
    //redirect
    localStorage.setItem('token',json.authtoken);
    // setuser(true);
    navigate('/');
    alert("Login successfully!!")


   }
   else
   {
    alert("Enter correct password and username")
   }
   }
   const onChange=(e)=>
   {
    setcredentials({...credentials,[e.target.name]:e.target.value})
   }
   
  return (
    <>
    {/* { user&& <Navbar/> } */}
    <div className="form-container">
    <form onSubmit={handleSubmit} className="login-form">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email*
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={credentials.email}
          name="email" required
          onChange={onChange}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password*
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={credentials.password}
          name="password" required
          onChange={onChange}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <h5>
        <br></br>
        Don't you have account??

      </h5>
      <button type="button" className="btn btn-primary" onClick={() => navigate('/Signup')}>
        Signup
      </button>
    </form>
  </div>
  </>
  )
  
}

export default  Login;
