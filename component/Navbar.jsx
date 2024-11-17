import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#category">Category</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <button onClick={()=>{navigate('/signup')}}  class="btn signup">Sign Up</button>
            <button onClick={()=>{navigate('/signin')}}  class="btn signin">Sign In</button>
          </div>
        </nav>
      </header>
    </div>
  )   
}

export default Navbar

