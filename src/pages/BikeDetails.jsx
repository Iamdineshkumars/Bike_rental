import React, { useContext, useEffect, useRef, useState } from 'react'
import {Link,useParams} from "react-router-dom"
import Wrapper from '../assets/Wrapper/booking';
import axios from "axios"
import { contextData } from '../Routes/Context';
import { nanoid } from 'nanoid';

const BikeDetails = () => {
  const [state1,setState1] = useState([])
  
  const {id} = useParams();
  const singleData = async()=>{
    
    let response = await axios.get(`http://localhost:3000/Data/${id}`)
    setState1(response.data)
  }
  useEffect(()=>{
    singleData()
  },[])

  const patchBikes = async()=>{
    try{
      let response = await axios.patch(`http://localhost:3000/Data/${id}`,{
        avaiable:avaiable-1,
      })
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
    
  
  //
  const {image,companey,bike_no,avaiable,rate,total_bikes}= state1//data destructring
  
  const {post_state,setPost_state,setButton,button} =useContext(contextData)
 // const [pickupDate,setPickupDate] = useState("")
  //const [DropoffDate,setDropoffDate] = useState("")
  
 // const [post_state,setPost_state]= useState(null)
  const inputRef = useRef({
    id:null,
    name:null,
    phone:null,
    bike_no:null,
    pickup:null,
    Drop_off:null,
    Total_Amount:null,
  })
  const handleSubmit=async(event)=>{
    event.preventDefault();
    
    const name = inputRef.current.name.value;
    const phone = inputRef.current.phone.value;
    const bike_no = inputRef.current.bike_no.value;
    const pickup = inputRef.current.pickup.value;
    const Drop_off = inputRef.current.Drop_off.value;

    const pickupDate = new Date(pickup)
    const DropoffDate = new Date(Drop_off)
   
      console.log(pickupDate)
      console.log(DropoffDate)
      const time = (pickupDate - DropoffDate)/(60*60*1000);
      const price =Math.abs(time*rate)
      console.log(price)
      if(!pickupDate || !DropoffDate){
        alert("please mention pickupDate and DropoffDate");
        return
      }
      if (DropoffDate <= pickupDate) {
        alert("Drop-off time must be later than pick-up time.");
        return
      }
    
    setPost_state({
      id:nanoid(),
      name:name,
      phone:phone,
      bike_no:bike_no,
      pickup:pickup,
      Drop_off:Drop_off,
      Total_Amount:price,
      completed:false
    })
    setButton(!button)
   // const pickupDate = new Date(pickup)
    //const DropoffDate = new Date(Drop_off)
   
   // alert(`booked successfully`)
    patchBikes()
  }
  
 // 
  return (
    <Wrapper>
    <div className='mainparent'>
      <div className='parent'>
        <div className='child_1'>
        <img src={image} />
          <h2 className='title'>{companey}</h2>
          <h2 className='rate'>{rate}Rs/hr</h2>
          <h3 className='attributes'>bike_no:{bike_no}</h3>
          <h3 className='attributes'>bikeAvailable:{avaiable}/{total_bikes}</h3>
        </div>
        <div className='child_2'>
          <form onSubmit={handleSubmit} className=''>
          <label htmlFor='' className='label'>Name:</label> <br/>
          <input type='text' placeholder='Enter Name'name='name' id="name" className='text-field' ref = {(element)=>(inputRef.current.name=element)}/><br/>
          <label htmlFor='' className='label'>Phone</label><br/>
          <input type="Number" placeholder='phone number' name="phone" className='text-field' id='phone' ref={(element)=>(inputRef.current.phone= element)}/><br/>
          <label htmlFor='' className='label'>Bike_no</label><br/>
          <input type ="text" placeholder='bike_no' id='bike_no' className='text-field' ref={(element)=>(inputRef.current.bike_no= element)}/><br/>
          <label htmlFor='' className='label'>Pick-up:</label><br/>
          <input type="datetime-local" id="pickup" className='text-field' ref={(element)=>(inputRef.current.pickup=element)}/><br/>
          <label htmlFor='' className='label'>Drop-off:</label><br/>
          <input type="datetime-local" id="Drop_off" className='text-field' ref={(element)=>(inputRef.current.Drop_off=element)} /><br/>
          <button type='submit' className='booknow'>Book now</button>
        
          </form>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default BikeDetails