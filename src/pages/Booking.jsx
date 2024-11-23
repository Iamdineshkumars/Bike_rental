import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Wrapper from '../assets/Wrapper/bookings'
import { Link, useParams } from 'react-router-dom'
import { contextData } from '../Routes/Context'
const Booking = () => {
  const {patchFunction,setBikeState} = useContext(contextData)
  const [get,setGet] = useState([])

  const postApi = async()=>{
    const result = await axios.get(`http://localhost:3000/posts`)
    console.log(result)
    setGet(result.data)
  }
  useEffect(()=>{
    postApi()
  },[]) 
  

 const revenue = get.map((items)=>{
    return items.Total_Amount
  })
  console.log(revenue)
  const Total_revenue = revenue.reduce((a,b)=>{ return a+b},0)
  console.log(Total_revenue)
  return (
    <Wrapper>
    <div>
      
      <div className='bookings_2'>
      <div><h2 className='total'>Total Revenue:{Total_revenue}</h2></div>
        <table>
          <tr>
            <th>S/No</th>
            <th>Bike_No</th>
            <th>Name</th>
            <th>Phone_No</th>
            <th>Pick_Up</th>
            <th>Drop_Off</th>
            <th>Total_Amount</th>
            <th>Completed</th>

            
          </tr>
          {get.map((items,index)=>{
          //setIndex(...index+1)
          return(<tr key={items.id}>
            <td>{index+1}</td>
            <td>{items.bike_no}</td>
            <td>{items.name}</td>
            <td>{items.phone}</td>
            <td>{items.pickup}</td>
            <td>{items.Drop_off}</td>
            <td>{items.Total_Amount}</td>
            <td><button className='completed'><Link to ={`/bookings/${items.id}`}className='btn-style'>{!items.completed?"No":"yes"}</Link></button></td>
        
          </tr>)
        })}
        </table>
        
      </div>
    </div>
    </Wrapper>
  )
}

export default Booking