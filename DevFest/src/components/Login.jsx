import {useState,useEffect} from 'react'
import { Button, Input } from '@mui/material';

export default function Login({changeLogState, loggedIn}) {
  useEffect(()=>{
  document.title = "Login"
  });
  const [inputData, setInputData] = useState({})
  function handleChange(event){
    console.log(inputData)
    setInputData({...inputData,[event.target.name]: event.target.value})
  }
  async function handleSubmit(event){
    event.preventDefault();
    console.log("Clicked")
    const {username, password} = inputData
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, password})
  };
    const response = await fetch("http://localhost:3000/login", requestOptions)
    const data = await response.json();
    if("token" in data){
      localStorage.setItem("TOKEN",data["token"])
      changeLogState(true)
    }else{
      alert("INPUTS ARE INVALID");
    }
  }
  return (
    <div className='main-content'>
    <div className='login-bg'>
      <Input className='test' autoFocus onChange={handleChange} name="username" placeholder='Username'  variant="filled"></Input>
      <Input  onChange={handleChange} name="password" placeholder='Password'  variant="filled"></Input>
      <Button color="secondary" onClick={handleSubmit}>Submit</Button>
    </div>
    </div>
  )



}
