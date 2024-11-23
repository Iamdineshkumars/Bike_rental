import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BikeDetails from '../pages/BikeDetails'
import Booking from '../pages/Booking'
import Bookings from '../pages/Bookings'
import ReturnBike from '../pages/ReturnBike'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/bike/:id" element ={<BikeDetails/>} />
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/bookings/:id" element={<Bookings/>}/>
    </Routes>
  )
}

export default AllRoutes