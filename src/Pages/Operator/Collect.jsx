import { useState } from "react";
import Navbar from "../../Components/Navbar";

export default function Collect(){
    const [vehicleno,setvehicleno]=useState();
 const [walletBalance, setWalletBalance] = useState(150);
  const tollAmount = 100;

  const collectToll = () => {
    if (!vehicleNo) {
      alert("Enter vehicle number");
      return;
    }

    if (walletBalance < tollAmount) {
      alert("❌ Insufficient wallet balance");
      return;
    }

    setWalletBalance(walletBalance - tollAmount);
    alert(`✅ Toll collected ₹${tollAmount}`);
  };
    return(
        <div>
            <Navbar/>
            <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Collect Toll</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Vehicle Number"
          value={vehicleno}
          onChange={(e) => setvehicleno(e.target.value)}
        />

        <p className="mb-2">Wallet Balance: ₹{walletBalance}</p>
        <p className="mb-4">Toll Amount: ₹{tollAmount}</p>

        <button
          onClick={collectToll}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Collect Toll
        </button>
      </div>
        </div>
    )
}