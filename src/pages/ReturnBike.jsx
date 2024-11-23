import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const ReturnBike = () => {
    const{id} = useParams();
    const bikePatch = async()=>{
        try{
           await axios.patch(`http://localhost:3000/posts/${id}`,{
            bike_status:true,
          })
        }
        catch(error){
          console.log(error)
        }
      }
   bikePatch()
  return (
    <div>ReturnBike successfully!!!</div>
  )
}

export default ReturnBike