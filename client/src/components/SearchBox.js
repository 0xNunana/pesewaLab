import React,{useState,useEffect} from 'react'
import { Combobox } from '@headlessui/react'
import {search,flight}from "../api/amadeus.api"
//import SearchPage from '../pages/SearchPage'


const SearchBox = ({dept,arr,deptDate,child,adults}) => {
  const[first,setFirst]=useState("")
  const[second,setSecond]=useState("")
  const[depart,setDepart]=useState("")

const [inputValue, setInputValue] = useState("");
const [inputValue2, setInputValue2] = useState(""); 
 const [options, setOptions] = useState([]);
console.log(options)
  useEffect(() => {
    const { process, cancel } = search(inputValue);
    process((options) => {
      setOptions(options);
    });
    return () => cancel();
  }, [inputValue])
  useEffect(() => {
    const { process, cancel } = search(inputValue2);
    process((options) => {
      setOptions(options);
    });
    return () => cancel();
  }, [inputValue2])
//console.log(inputValue)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(first)
    console.log(second)
   console.log(depart)
   flight({first,second,depart})
   console.log(flight)
  }
// const output = options
  
  return (
    <div className='bg-gray-300 py-4 '>
        <form  className='flex justify-center space-x-5 '  onSubmit={handleSubmit}>
          <div>
          <Combobox  value={first} onChange={setFirst} name="Depart">
          <Combobox.Label>Departure</Combobox.Label>
          <div>
            <div><Combobox.Input
        onChange={(e) => setInputValue(e.target.value)}
        displayValue={options}
      /></div>
          <div className='bg-white my-1'>
          <Combobox.Options>
          {options.map(option=>
          <Combobox.Option value={option.code} >
            {option.city}({option.code})
            </Combobox.Option>)}
          
      </Combobox.Options>
          </div>
      
          </div>
     
   </Combobox>
    </div>
    <div>
          <Combobox  value={second} onChange={setSecond} name="Arrive">
          <Combobox.Label>Destination</Combobox.Label>
          <div>
            <div><Combobox.Input
        onChange={(e) => setInputValue2(e.target.value)}
        displayValue={options}
      /></div>
          <div className='bg-white my-1'>
          <Combobox.Options>
          {options.map(option=>
          <Combobox.Option value={option.code} >
            {option.city}({option.code})
            </Combobox.Option>)}
          
      </Combobox.Options>
          </div>
      
          </div>
     
   </Combobox>
    </div>
   
    <div >
      <div className='block '>
        <div><label htmlFor="date">Date</label></div>
        <div><input type="date" id="date" value={depart} onChange={(e)=>setDepart(e.target.value)}/></div>
      </div>
      
    </div>
    <div className='block'>
      <button  className='rounded-lg bg-green-300 p-5 text-lg'>Search</button></div>
    
        
    
            
            
        </form>

    </div>

  )
}

export default SearchBox