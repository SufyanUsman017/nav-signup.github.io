import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import SignupForm from './component/SignupForm'
import SigninForm from './component/SigninForm'
import Profile from './component/Profile'
import { BrowserRouter,Navigate,Route, Routes, useNavigate } from "react-router-dom";
import NotFound from './component/NotFound'




function App() {

  // const navigate = useNavigate();

  // const log = true;

  // const login = ()=>{

  //   if(log){
  //     navigate("/signup")
  //   }
  //   else{
  //     alert("You are not login")
  //   }


    


  // }

  return (
    <div>
      <Navbar />
      
    
      <Routes>
        <Route path="/" element={ 
          <center>
              <h1>I am a Home</h1>
          </center>} />

          <Route path="signup" element={<SignupForm />} />
          <Route path="signin" element={<SigninForm />} />

      </Routes> 

      {/* <button onClick={login} >click me</button> */}

   

      

      

    
     </div>
  );
}

export default App;
