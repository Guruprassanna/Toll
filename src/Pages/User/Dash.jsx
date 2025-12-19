import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";

export default function Dash() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/transactions/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
        <Navbar/>
      <h2>Toll History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Plaza</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {history.map((t) => (
            <tr key={t._id}>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.tollPlaza}</td>
              <td>₹ {t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
