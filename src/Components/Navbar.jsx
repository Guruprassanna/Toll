import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate()
const role = localStorage.getItem("role");
    return (
    <nav>
    <div className="navbar">
      <h1 className="logo">Toll Management System</h1>
     
     
      <div className="nav-right">
        {role==="admin" && (
          <>
           <a href=""  onClick={()=>navigate('/about')}>About</a>
            <a href="" onClick={() => navigate("/dashboard")}>
              Dashboard
            </a>
            <a href="" onClick={() => navigate("/reports")}>
              Reports
            </a>
          </>
        )}

        
        {role === "operator" && (
          <>
           <a href=""  onClick={()=>navigate('/profile')}>Profile</a>
            {/* <a href="" onClick={() => navigate("/collect")}>
              Collect Toll
            </a> */}
          </>
        )}

        
        {role === "user" && (
          <>
          <a href="" onClick={()=>navigate('/user/history')}>Dashboard</a>
           <a href=""  onClick={()=>navigate('/profile')}>Profile</a>
            {/* <a href="" onClick={() => navigate("/wallet")}>
              Wallet
            </a>
             <a href="" onClick={()=>navigate('/recharge')}>Recharge</a>
            <a href="" onClick={() => navigate("/User/history")}>
              My History
            </a> */}
          </>
        )}

      
       
      </div>
     

      <button className="logout" onClick={()=>navigate('/login')}>Logout
        </button>
    </div>
    </nav>
  );
}
