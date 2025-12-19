import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Recharge(){
    const [amount,setamount]=useState();
    const navigate=useNavigate();
    const handleRecharge = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    
    alert(`Wallet recharged with ₹${amount}`);
    navigate("/wallet");
  };

    return(
        <div>
            <Navbar />
<div >
        <h2 >Recharge Wallet</h2>

        <form onSubmit={handleRecharge}>
          <input
            type="number"
            placeholder="Enter amount"
           
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />

          <button >
            Recharge
          </button>
        </form>
      </div>
        </div>
    )
}