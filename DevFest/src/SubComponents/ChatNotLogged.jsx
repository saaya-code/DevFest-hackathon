import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function chatNotLogged() {
  return (
    <div className='second-content'>
        <div className='notFoundText'>
            <h1>You're not logged in.</h1>
            <p>Please login in to access the city chat.</p>
        </div>
        <div className='chatbtns'>
            
           <Link to="/login"> <Button variant="contained" disableElevation size='large'>
                Login
            </Button></Link>
            <Link to="/contact"><Button variant="contained" disableElevation>
                Contact Us
            </Button></Link>
        </div>
    </div>
  )
}

export default chatNotLogged