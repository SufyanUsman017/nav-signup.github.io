import React, { useState } from "react";

function SignupForm() {

const [users,setUsers] = useState([]);
const [inputName,setInputName] = useState('');
const [inputUname,setInputUname] = useState('');
const [inputPassword,setInputPassword] = useState('');


const register =()=>{
  console.clear()

  const person = {
    fullName: inputName,
    userName: inputUname,
    password: inputPassword
  }

  setUsers([...users,person])
  console.log(users)


}


  return (
    <div >
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form">
            <label for="name">Full Name:</label>
            <input type="text" onChange={(e)=>{setInputName(e.target.value)}}  placeholder="Enter your full name" required />

            <label for="username">Username:</label>
            <input type="text" onChange={(e)=>{setInputUname(e.target.value)}}  placeholder="Enter your username" required />

            <label for="password">Password:</label>
            <input type="password" onChange={(e)=>{setInputPassword(e.target.value)}}  placeholder="Enter your password" required />

            <button onClick={register}>Register</button>
        </form>
    </div>
    </div>
  );
}

export default SignupForm;
