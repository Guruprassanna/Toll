import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
export default function History() {
      const [user, setUser] = useState(null);


    const navigate=useNavigate();
    const [transactions, setTransactions] = useState([]);

useEffect(() => {
  const fetchTransactions = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5000/api/transactions/recent",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTransactions(res.data);
  };

  fetchTransactions();
}, []);

useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
         setUser(res.data);
      } catch (error) {
  console.error("ERROR STATUS:", error.response?.status);
  console.error("ERROR MESSAGE:", error.response?.data);
}

    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
<Navbar/>
      <h2 className="dashboard-title">User Dashboard</h2>

      {/* TOP CARDS */}
      <div className="card-row">

        <div className="card">
          <h3>Wallet Balance</h3>
          <a href="" onClick={()=>navigate('/wallet')}>=</a>
          
          
        </div>

        <div className="card">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Vehicle:</strong>{user.vehicleNumber||"Not Aded"}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>

      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="card full-card">
        <h3>Recent Toll Transactions</h3>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Toll Plaza</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
  {transactions.map((t) => (
    <tr key={t._id}>
      <td>{new Date(t.date).toLocaleDateString()}</td>
      <td>{t.tollPlaza}</td>
      <td>₹ {t.amount}</td>
    </tr>
  ))}
</tbody>

        </table>

        <button className="link-btn" onClick={()=>navigate('/dash')}> Full View History →</button>
      </div>

      

    </div>
  );
}
