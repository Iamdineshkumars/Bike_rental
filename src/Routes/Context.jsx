import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const contextData = createContext()

const Context = ({children})=>{
    const [state,setState] = useState([]);
  const fetchData= async()=>{
    const response = await axios.get(`http://localhost:3000/Data`)
    setState(response.data)    
  }
  useEffect(()=>{
    fetchData()
  },[])
  const [post_state,setPost_state]= useState(null)
  const [button , setButton] =useState(false)
  const post_bookings = async()=>{
    const result = await axios.post(`http://localhost:3000/posts`,
      post_state
     )
     return result
    }
     if (button === true){
       post_bookings()
     }
 const [bikestate,setBikeState] = useState(true)
    

    return(
        <contextData.Provider value={{state,post_state,setPost_state,button,setButton,bikestate,setBikeState}}>
           {children}
        </contextData.Provider>
    )
}
export default Context