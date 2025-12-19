import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import History from "./Pages/User/History";
import Wallet from "./Pages/User/Wallet";
//import Profile from "./Components/Profile";
import Recharge from "./Pages/User/Recharge";
import Collect from "./Pages/Operator/Collect";


import Dash from "./Pages/User/Dash";
import ProtectedRoute from "./Pages/Operator/ProtectedRoute";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/user/history" element={<History/>}></Route>
        <Route path="/wallet" element={<Wallet/>}></Route>
        
        <Route path="/recharge" element={<Recharge/>}></Route>
        <Route
  path="/collect"
  element={
    <ProtectedRoute allowedRole="operator">
      <Collect />
    </ProtectedRoute>
  }
/>

        <Route path="/dash" element={<Dash/>}></Route>
    </Routes>
   
   </BrowserRouter>
   
  )
}