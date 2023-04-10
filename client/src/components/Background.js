import React,{useState}from 'react'
import SearchBox from './SearchBox'
//import { flight } from '../api/amadeus.api'


const Background = () => {
  const [depCode,setDepCode]=useState(null)
  const [arrCode,setArrCode]=useState(null)
  const [date,setDate]=useState(null)
  console.log(depCode)
  console.log(arrCode)
  console.log(date)
  
  return (
    <div className='bg-orange-200 py-40'>
    <div className="max-w-screen-lg mx-auto mt-7 ">
        <SearchBox dept={setDepCode} arr={setArrCode} setDate={setDate}/>
        </div>
    
    </div>
  )
}

export default Background