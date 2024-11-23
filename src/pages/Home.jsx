import React, { useEffect, useState } from 'react'
import Bike from '../components/Bike'
import Wrapper from '../assets/Wrapper/cart'



const Home = () => {

  return (
    <Wrapper>
    <div className='home_cart'>
      <Bike />
    </div>
    </Wrapper>
  )
}

export default Home