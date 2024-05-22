import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={"/favorite"}>Favorites</Link>
      <Link to={"/basket"}>Basket</Link>
    </div>
  )
}

export default Navbar
