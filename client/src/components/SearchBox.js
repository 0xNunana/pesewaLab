import React,{useState,useEffect} from 'react'
import { Combobox } from '@headlessui/react'
import {search}from "../api/amadeus.api"
//import SearchPage from '../pages/SearchPage'


const SearchBox = ({dept,arr,deptDate,child,adults}) => {
  const[first,setFirst]=useState("")
  const[second,setSecond]=useState("")

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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   flight(dept,arr,deptDate,child,adults);
   
  // }
// const output = options
  
  return (
    <div className='bg-gray-300 py-4 '>
        <form  className='flex justify-center space-x-5 '>
          <div>
          <Combobox  value={first} onChange={setFirst} >
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
          <Combobox  value={second} onChange={setSecond} >
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
        <div><input type="date" id="date" value={deptDate}/></div>
      </div>
      
    </div>
    <div className='block'>
      <button  className='rounded-lg bg-green-300 p-5 text-lg'>Search</button></div>
    
        
    
            
            
        </form>

    </div>

  )
}

export default SearchBox