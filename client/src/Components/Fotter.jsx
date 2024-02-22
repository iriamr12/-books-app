import React from 'react'
import { Link } from "react-router-dom";
import "./Fotter.css"

const Fotter = () => {
  return (
    <div className='container'>
        <Link to="/">Lobby</Link>
        <Link to="/bookSearch" className="link">Search</Link>
    </div>
   
  )
}

export default Fotter