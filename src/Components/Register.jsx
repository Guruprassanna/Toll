import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Register(){
    const navigate=useNavigate()
    const[form,setform]=useState({username:"",mailid:"",newpassword:"",confirmpassword:""})
    const handleform=(e)=>{
        const {name,value}=e.target
        setform({...form,[name]:value})
    }
     const  handleproceed=async(e)=>{
    e.preventDefault()
    if (
      !form.username ||
      !form.mailid ||
      !form.newpassword ||
      !form.confirmpassword
    ) {
      alert("All fields are required");
      return;
    }

    if (form.newpassword !== form.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
       const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name:form.username,
          email: form.mailid,
          password:form.newpassword,
          confirmPassword:form.confirmpassword
        }
      );

    // Here you can send data to backend (later)
    console.log("Registered Data:", form);

    alert("Registration successful!");

    // Navigate to Login page
    navigate("/login");

   }
    return(
        <div className="auth-container">
            <h1>Register</h1>
            <form onSubmit={handleproceed}>
                Name:<input type="text" name="username" value={form.username} onChange={handleform}></input><br/>
                Email:<input type="email" name="mailid" value={form.mailid} onChange={handleform}></input><br/>
                New password:<input type="text" name="newpassword" value={form.newpassword} onChange={handleform}></input><br/>
                Confirm password:<input type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleform}></input><br/>
                <button type="submit">Register</button>
            </form>
            <p>
              Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login</button>
        </p>
        </div>
    )
}