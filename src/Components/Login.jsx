import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login(){
    const [form,setform]=useState({email:"",pass:""})
    const navigate=useNavigate();
   
    const handleform=(e)=>{
        const {name,value}=e.target
        setform({...form,[name]:value})
    }
   const handleSubmit=async(e)=>{
    e.preventDefault()
 if (!form.email || !form.pass) {
            alert("Please fill all fields");
            return;
        }

     
        
  
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password:form.pass,
        }
      );

      // save token and role
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
     
  console.log("ROLE:", response.data.role);

      // redirect
      if (response.data.role === "admin") {
        navigate("/dashboard");
      } else if (response.data.role === "operator") {
        navigate("/collect");
      } else {
        navigate("/user/history");
      }

    
  };
    return(
        
            <div className="auth-container">

        <>
            <h1>Login</h1>
             <form onSubmit={handleSubmit}>
               Email: <input type="email" name='email'value={form.email}  onChange={handleform}></input><br/>
               Password: <input type='password' name='pass'value={form.pass} onChange={handleform}></input><br/>
                <input type="submit"/>
                
            </form> 
             <p>
            <p>
        New user?{" "}
        <button onClick={() => navigate("/")}>Register</button>
      </p>
          </p>
          </>
      
        </div>
    )
}