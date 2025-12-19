import { useState } from "react"
import Navbar from "../../Components/Navbar"
import { useNavigate } from "react-router-dom"
export default function Wallet(){
    const [balance,setbalance]=useState(150)
    const navigate=useNavigate();
    return(
        <div>
            <Navbar/>
            <div >
        <h2 >My Wallet</h2>

        <div >
          <p >Available Balance</p>
          <h1 >
            ₹{balance}
          </h1>

          {balance < 100 && (
            
          
      <div className="card alert-card">
        ⚠️ Low balance alert: Please recharge to avoid delays
      </div>
            
          )}
          <button onClick={()=>navigate('/recharge')}>
            Recharge
          </button>
        </div>
      </div>

        </div>
    )
}