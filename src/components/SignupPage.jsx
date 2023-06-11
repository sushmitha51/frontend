import React, { Component,useState   } from 'react'
import axios from "axios";
import"./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face';

function SignupPage() {
  // let navigate = useNavigate();
  const [user,setUser] = useState("");
  const [pwd,setPwd] = useState("");
  const [mail,setmail] = useState("");
  const [number,setnumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const use={
      username:user,
      password:pwd,
      email:mail
    };
    console.log(user);
    console.log(use);
    const r=await axios.post("http://localhost:8080/signup", use);
    console.log(r.data);
     if(r.data==="Login success")
    {
      alert("login successful")
      navigate=("/");
    }
  };

  return (
   <div className='login-page'>
    <div className='login'>
      <h1>Signup</h1>
      <form onSubmit={(e)=>handleLogin(e)} className='loginform'>
        <input type="text" placeholder='Username' onChange={(e)=>{setUser(e.target.value)}}/>
        <input type="password" placeholder='password' onChange={(e)=>{setPwd(e.target.value)}}/>
        <input type="mobilenumber" placeholder='mobilenumber' onChange={(e)=>{setnumber(e.target.value)}}/>
        <input type="email" placeholder='email' onChange={(e)=>{setPwd(e.target.value)}}/>
        <button><Link to="/" className="font1">Signup</Link></button>
      </form>
     
    </div>
   </div>
  )
}

export default SignupPage;