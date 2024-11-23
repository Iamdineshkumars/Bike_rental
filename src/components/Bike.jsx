import React, { useContext, useEffect, useState } from 'react'
import { contextData } from '../Routes/Context'
import Wrapper from '../assets/Wrapper/cart';
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios';
const Bike = () => {
  const {state} = useContext(contextData);
  const [state2,setState2] = useState([])
  console.log(state)
  //const navigate = useNavigate()
  /*function handleButton(id){
    console.log(id)
  
    
  }*/
  return (
    
    <Wrapper>
    <div className="cart_1">
       {state.map((items)=>{
        const available = items.avaiable
        return (<div key={items.id} className='cart_2'>
          <img src={items.image} className="image"/>
          <div className='cart_3'>
          <span className='heading_part'><h4 className='heading'>{items.companey}</h4> <h4 className='rate'>{items.rate} Rs/hr</h4></span>
          <h4 className='attributes'>Bike_no:{items.bike_no}</h4>
          
          <h4 className='attributes'> Bike Available:{available}/{items.total_bikes}</h4>
          </div>
          <Link className='book-btn' to={`/bike/${items.id}`}>book now</Link>
          
          </div>)
      })}
    </div>
    </Wrapper>
  )
}

export default Bike