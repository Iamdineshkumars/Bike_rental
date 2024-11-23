import React, { useReducer } from 'react'

const UseReducer = () => {
 
 const reducerFunction = (count,action)=>{
    console.log(count,action)
    switch(action.type){
        case "increment_count" :{
            return count + action.payload
        }
        case "decrement_count" :{
            return count - action.payload
        }
        default:{
            throw new Error("adsfd")
        }
    }
 }
 const [count,dispatch] =   useReducer(reducerFunction,0)
  const handleAddition =()=>{
    dispatch({type:"increment_count" , payload:2})
  }
  const handleSubtraciton =()=>{
    dispatch({type:"decrement_count", payload:1})
  }

  return (
    <div>UseReducer
        <h2>{count}</h2>
        <button onClick={handleAddition}>add</button>
        <button onClick={handleSubtraciton}>sub</button>
    </div>
  )
}

export default UseReducer