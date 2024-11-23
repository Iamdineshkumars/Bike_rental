import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { contextData } from '../Routes/Context';
const Bookings = () => {
   const {id} = useParams();
  // const{bikestate} = useContext(contextData)
    const patchFunction = async()=>{
        try{
        const response = await axios.patch(`http://localhost:3000/posts/${id}`,{
          completed:true
        })
        console.log(response)
      }
      catch(error){
        console.log(error)
      }
      }
      patchFunction()
      
  return (
    <div>Booking successfully!!</div>
  )
}

export default Bookings