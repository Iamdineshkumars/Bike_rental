import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/navbar.js'
const links = [
  {
    path:"/",
    text:"Bike Rental"
  },
  {
    path:"/booking",
    text:"All Bookings"
  }
]
const Navbar = () => {
  return (
    <Wrapper>
    <div className='nav_main'>
      <div><img src='https://m.media-amazon.com/images/I/61+gxqqO8LL._AC_UF1000,1000_QL80_.jpg' alt="root" className='image'/></div>
      <div> <h1 className='title'>Bike Rental Admin Dashboard</h1></div>
      <div className='navbar0' >
      {links.map((link)=>{
        return <NavLink to={link.path} key={link.path} className="navbar1">
          {link.text}
        </NavLink>
      })}
      </div>
    </div>
    </Wrapper>
     
  )
}

export default Navbar