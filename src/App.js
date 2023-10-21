import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

const [interest,setinterest]=useState(0)
const [principle,setprinciple]=useState(0)
const [rate,setrate]=useState(0)
const [year,setyear]=useState(0)
const [Isprinciple,setIsprinciple]=useState (true)
const [Israte,setIsrate]=useState (true)
const [Isyear,setIsyear]=useState(true)

const getvaliadate=(e)=>{
 const {name,value}= e.target
//  console.log(name,value);
//  setpriciple(value)
if(!! value.match(/^[0-9]*.?[0-9]+$/)){
 if(name==='principle') 
 {setprinciple(value)
  setIsprinciple(true)}
else if(name==='rate') {
setrate(value)
setIsrate(true)
}
else{
  setyear(value)
  setIsyear(true)
}
}
else{
  if(name==='principle') {
  setprinciple(value)
  setIsprinciple(false)}
  else if(name==='rate'){
    setrate(value)
    setIsrate(false)
  }
  else{
    setyear(value)
  setIsyear(false)
  }
}
}
const handleCalculate=(e)=>{
  e.preventDefault()
  if(! principle || ! rate || ! year){
    alert ('please fill the form')
  }
  else{
    // alert('submit')
    setinterest(principle*rate*year/100)
  }
}
const handlereset=(e)=>{
  setinterest(0)
  setprinciple(0)
  setrate(0)
  setyear(0)
  setIsprinciple(true)
  setIsrate(true)
  setIsyear(true)
}
  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark ">
<div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
  <p>Calculate Simple Interest Easly</p>
  <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 rounded flex-column '>
    <h1>₹{''} {interest} </h1>
    
    <p>Total Simple Interest</p>
  </div>
  <form className='mt-5' onSubmit={handleCalculate}>
  <div className='mb-3'>
  <TextField name='principle' value={principle || "" }  className='w-100' id="outlined-basic" label="₹ Priciple Amount" variant="outlined" onChange={(e)=>getvaliadate(e)} />
  </div>
  {  ! Isprinciple &&
    <div>
    <p className='text-danger fu-bolder'>Invalid Input</p>
  </div>}
  


  <div className='mb-3'>
  <TextField name='rate' value={rate || ""} className='w-100' id="outlined-basic" label="Rate of Interest" variant="outlined" onChange={(e)=>getvaliadate(e)}/>
  </div>
  {  ! Israte &&
    <div>
    <p className='text-danger fu-bolder'>Invalid Input</p>
  </div>}

  <div className='mb-3'>
  <TextField name='year' value={year || ""} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" onChange={(e)=>getvaliadate(e)} />
  </div> 
  {  ! Isyear &&
    <div>
    <p className='text-danger fu-bolder'>Invalid Input</p>
  </div>}

  <Stack className='mt-5' direction="row" spacing={2}>
  <Button type='submit' disabled={Isprinciple && Israte && Isyear ?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
<Button onClick={handlereset} variant="outlined" style={{width:'200px',height:'50px'}}>Reset</Button>
</Stack>
  </form>
</div>   
 </div>
  );
}

export default App;
